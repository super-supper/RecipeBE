const db = require("../database/dbConfig")

class IngredientDAO {

    async getRecipesIngredients(id) {
        let ingredientList;
        ingredientList = await db
            .where("recipe_id", id)
            .select("ingredient", "qty")
            .from("ingredients")
            .orderBy("qty");
        return ingredientList;
    }

    async createIngredient(ingredient, qty, recipe_id) {
       let x;
       x = await db("ingredients").insert({
            ingredient,
            qty,
            recipe_id
        });
        return x;
    }
}

module.exports = new IngredientDAO();