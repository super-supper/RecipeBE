const recipeDAO = require("../dao/recipe");

class RecipeService {
    getRecipes(req) {
        return  recipeDAO.getAllRecipes(req.query.limit, req.skip)
    }

    createRecipe(req) {
        const { title, description, url, img_url, total_time, prep_time, cook_time, yields, feeds, ingredients, steps, tags } = req;
        return recipeDAO.createRecipe(title, description, url, img_url, total_time, prep_time, cook_time, yields, feeds, ingredients, steps, tags);

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