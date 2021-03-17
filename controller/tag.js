const tagService = require("../service/tag");

const { validationResult } = require("express-validator");

class TagController {
    async getAllTags(req, res) {
        try {
            const tagList = await tagService.getAllTags();
            res.status(200).json(tagList);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async addTag(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await tagService.createTag(req.body);
            res.status(201).json("Success!");
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteTag(req, res) {
        try {
            await tagService.deleteTagById(req);
            res.status(200).json("Success!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new TagController();