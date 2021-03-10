const db = require("../database/dbConfig")

class StepDAO {
    async createStep(stepNum, steps, recipe) {
        const [step] = await db("steps").insert({
            step_num: stepNum,
            steps,
            recipe
        }).returning("step");

        return step;
    }

    async getRecipeSteps(id) {
        let stepList;
        stepList = await db
            .where("step_id", id)
            .select("step_num", "step")
            .from("steps")
            .orderBy("step_num");

        return stepList;
    }
}

module.exports = new StepDAO();