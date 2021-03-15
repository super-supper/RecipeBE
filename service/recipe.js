const recipeDAO = require("../dao/recipe");

class RecipeService {
    getRecipes() {
        return  recipeDAO.getAllRecipes()
    }

    createRecipe(req) {
        const { title, description, url, ingredients, steps, tags } = req;
        return recipeDAO.createRecipe(title, description, url, ingredients, steps, tags);

    }

    getRecipeById(req) {
        const id  = req.params.id;
        return recipeDAO.getRecipeByID(id);
    }

    deleteRecipeById(req) {
        const id = req.params.id;
        return recipeDAO.deleteRecipeById(id);
    }
}

module.exports = new RecipeService();