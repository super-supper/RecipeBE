const recipeTagDAO = require("../dao/recipeTags");

class RecipeTagService {
    getRecipesTags(req) {
        const id = req.params.id;
        return recipeTagDAO.getRecipesTags(id);
    }

    addRecipeTag(req) {
        const { recipe_id, tag_id } = req.body;
        return recipeTagDAO.createRecipeTag(recipe_id, tag_id);
    }

    deleteRecipeTag(req) {
        const id = req.params.id;
        return recipeTagDAO.deleteRecipeTagById(id);
    }
}

module.exports = new RecipeTagService();