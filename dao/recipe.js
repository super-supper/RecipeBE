const db = require("../database/dbConfig");
const recipeModel = require("../model/recipeModel");
const ingredientDAO = require("./ingredient");
const stepDAO = require("./step");
const recipeTagDAO = require("./recipeTags");

class RecipeDAO {
    async getAllRecipes(limit, offset) {
        const results = await db.select()
            .table("recipes")
            .limit(limit)
            .offset(offset)

        const count = results.length;

        return [ results, count ];
    }

    async getRecipeByID(id) {
        const [recipe] = await db
            .where("recipe_id", id)
            .select()
            .from("recipes");

        if (recipe == null) throw `Recipe_ID ${id} not found!`;

        const r = new recipeModel(recipe.recipe_id,  recipe.title, recipe.description, recipe.url);

        r.ingredients = await ingredientDAO.getRecipesIngredients(recipe.recipe_id);
        r.steps = await stepDAO.getRecipeSteps(recipe.recipe_id);
        r.tags = await recipeTagDAO.getRecipesTags(recipe.recipe_id);

        return r;
    }

    async createRecipe(title, description, url, ingredients, steps, tags) {
        const [recipe_id] = await db("recipes").insert({
            title,
            description,
            url
        }).returning("recipe_id");

        ingredients.forEach( i => {
            ingredientDAO.createIngredient(i.ingredient, i.qty, recipe_id);
        })

        steps.forEach( s => {
            stepDAO.createStep(s.step_num, s.step, recipe_id);
        })

        tags.forEach(t => {
            recipeTagDAO.createRecipeTag(recipe_id, t.tag_id);
        })

        return recipe_id;
    }

    async deleteRecipeById(id) {
        let x;
        x = await db("recipes")
            .where("recipe_id", id)
            .del();
        return x;
    }
}


module.exports = new RecipeDAO();