const recipeDAO = require("../dao/recipe");

class RecipeService {
    getRecipes() {
        return  recipeDAO.getAllRecipes()
    }

    createRecipe(recipe) {
        const { title, description, url, ingredients, steps } = recipe;
        return recipeDAO.createRecipe(title, description, url, ingredients, steps);

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