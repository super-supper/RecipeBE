const db = require("../database/dbConfig");

class RecipeTagDAO {
    async getRecipesTags(id) {
        const recipesTagList = await db
            .where("recipe_id", id)
            .select("recipetag_id", "tag_id")
            .from("recipe_tags")

        return recipesTagList;
    }

    async createRecipeTag(recipe_id, tag_id) {
        let x;
        x = await db("recipe_tags")
            .insert({
                recipe_id,
                tag_id
            });
        return x;
    }

    async deleteRecipeTagById(id) {
        let x;
        x = await db("recipe_tags")
            .where("recipetag_id", id)
            .del();
        return x;
    }

}

module.exports = new RecipeTagDAO();
