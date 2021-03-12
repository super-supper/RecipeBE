const recipeService = require("../service/recipe")

class RecipeController {
    async getAllRecipes(req, res) {
        try {
            const recipeList = await recipeService.getRecipes();
            res.status(200).json(recipeList);
        } catch (err) {
            res.status(500).json(err);
            debugger;
        }
    };

    async addRecipe(req,res) {
        try {
            const id = await recipeService.createRecipe(req.body);
            res.status(201).json(id);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getRecipeById(req, res) {
        try {
            const recipe = await recipeService.getRecipeById(req);
            res.status(200).json(recipe);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteRecipe(req, res) {
        try {
            await recipeService.deleteRecipeById(req);
            res.status(200).json("Success!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new RecipeController();