const tagDAO = require("../dao/tag");

class TagService {
    getAllTags() {
        return tagDAO.getAllTags();
    }

    createTag(req) {
        const { tag } = req;
        return tagDAO.createTag(tag);
    }

    deleteTagById(req) {
        const id = req.params.id;
        return tagDAO.deleteTag(id);
    }
}

module.exports = new TagService();