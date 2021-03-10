const db = require("../database/dbConfig")

class IngredientDAO {

    async getRecipesIngredients(id) {
        let ingredientList;
        ingredientList = await db
            .where("ingredient_id", id)
            .select("ingredient", "qty")
            .from("ingredients")
            .orderBy("qty");

        return ingredientList;
    }

    async createIngredient(ingredients, qty, recipe) {
       const [ingredient] = await db("ingredients").insert({
            ingredients,
            qty,
            recipe
        }).returning("ingredient");

       return ingredient;
    }
}

module.exports = new IngredientDAO();