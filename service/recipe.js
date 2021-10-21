const recipeDAO = require("../dao/recipe");

class RecipeService {
    getRecipes(req) {
        return  recipeDAO.getAllRecipes(req.query.limit, req.skip)
    }

    createRecipe(req) {
        const { title, description, url, imgUrl, totalTime, prepTime, cookTime, yields, feeds, ingredients, steps, tags } = req;
        return recipeDAO.createRecipe(title, description, url, imgUrl, totalTime, prepTime, cookTime, yields, feeds, ingredients, steps, tags);

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