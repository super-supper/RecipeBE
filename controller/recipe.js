const recipeService = require("../service/recipe")

class RecipeController {
    async getAllRecipes(req, res) {
        try {
            const recipeList = await recipeService.getRecipes();
            res.status(200).json(recipeList);
        } catch (err) {
            res.status(500);
            console.log(err)
            debugger;
        }
    };

    async addRecipe(req,res) {
        try {
            const id = await recipeService.createRecipe(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.log(err)
            res.status(500);
        }
    }
}

module.exports = new RecipeController();