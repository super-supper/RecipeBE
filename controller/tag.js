const tagService = require("../service/tag");

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