
exports.up = function(knex) {
    return knex.schema.table("recipe_tags", table => {
        table.integer("tag_id")
            .unsigned()
            .notNullable()
            .references("tags.tag_id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema.table("recipe_tags", table => {
      table.dropColumn("tag_id");
  })
};
