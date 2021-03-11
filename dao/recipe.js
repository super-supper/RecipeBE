const db = require("../database/dbConfig")
const recipeModel = require("../model/recipeModel");
const ingredientDAO = require("./ingredient");
const stepDAO = require("./step");

class RecipeDAO {
    async getAllRecipes() {
        const recipeList = await db.select()
            .table("recipes")
            .orderBy("title")
        return recipeList;
    }

    async getRecipeByID(id) {
        const [recipe_id, title, description, url] = await db
            .where("recipe_id", id)
            .select()
            .from("recipes");

        const r = new recipeModel(recipe_id,  title, description, url);

        // const ingredientList = await db
        //     .where("indredient_id", recipe_id)
        //     .select("ingredient", "qty")
        //     .from("ingredients")
        //     .orderBy("qty");
        //
        // const stepList = await db
        //     .where("step_id", recipe_id)
        //     .select("step_num", "step")
        //     .from("steps")
        //     .orderBy("step_num");

        r.ingredients = ingredientDAO.getRecipesIngredients(recipe_id);
        r.steps = stepDAO.getRecipeSteps(recipe_id);

        return r;
    }

    async createRecipe(title, description, url, ingredients, steps) {
        const [recipe_id] = await db("recipes").insert({
            title,
            description,
            url
        }).returning("recipe_id");

        ingredients.forEach( i => {
            ingredientDAO.createIngredient(i.ingredient, i.qty, recipe_id);
        })

        steps.forEach( s => {
            stepDAO.createStep(s.stepNum, s.step, recipe_id);
        })

        return recipe_id;
    }
}

module.exports = new RecipeDAO();