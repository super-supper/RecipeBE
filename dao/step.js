const db = require("../database/dbConfig")

class StepDAO {
    async createStep(stepNum, step, recipe_id) {
        let x ;
        x = await db("steps").insert({
            step_num: stepNum,
            step,
            recipe_id
        });
        return x;
    }

    async getRecipeSteps(id) {
        let stepList;
        stepList = await db
            .where("recipe_id", id)
            .select("step_num", "step")
            .from("steps")
            .orderBy("step_num");

        return stepList;
    }
}

module.exports = new StepDAO();