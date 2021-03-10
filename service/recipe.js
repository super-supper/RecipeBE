const recipeDAO = require("../dao/recipe");

class RecipeService {
    getRecipes() {
        return  recipeDAO.getAllRecipes()
    }

    createRecipe(recipe) {
        const { title, description, url, ingredients, steps } = recipe;
        return recipeDAO.createRecipe(title, description, url, ingredients, steps);

    }
}

module.exports = new RecipeService();