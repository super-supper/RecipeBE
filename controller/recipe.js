const recipeService = require("../service/recipe");
const recipeTagService = require("../service/recipeTag");

const { validationResult } = require("express-validator");
const paginate = require('express-paginate');

class RecipeController {
    async getAllRecipes(req, res) {
        try {
            const [ results, itemCount ] = await recipeService.getRecipes(req);

            const pageCount = Math.ceil(itemCount / req.query.limit);

            res.status(200).json({
                object: "list",
                has_more: paginate.hasNextPages(req)(pageCount),
                data: results
            });
        } catch (err) {
            res.status(500).json(err);
        }
    };

    async addRecipe(req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const id = await recipeService.createRecipe(req.body);
            res.status(201).json(id);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getRecipeById(req, res) {
        try {
            const recipe = await recipeService.getRecipeById(req);
            res.status(200).json(recipe);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteRecipe(req, res) {
        try {
            await recipeService.deleteRecipeById(req);
            res.status(200).json("Success!");
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getRecipesTags(req, res) {
        try {
            const recipeTagList = await recipeTagService.getRecipesTags(req);
            res.status(200).json(recipeTagList);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async addRecipeTag(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await recipeTagService.addRecipeTag(req);
            res.status(201).json("Success!");
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteTag(req, res) {
        try {
            await recipeTagService.deleteRecipeTag(req);
            res.status(200).json("Success!")
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new RecipeController();