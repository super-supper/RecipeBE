const db = require("../database/dbConfig")

class TagDAO {
    async getAllTags() {
        let tags;
        tags = await  db()
            .select()
            .table("tags")
            .orderBy("tag");

        return tags;
    }

    async createTag(tag){
        let t;
        t = await db("tags")
            .insert({
                tag
            });
        return t;
    }

    async deleteTag(id){
        let x;
        x = await db("tags")
            .where("tag_id", id)
            .del()
        return x;
    }
}

module.exports = new TagDAO();