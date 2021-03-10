
exports.up = function(knex) {
  return knex.schema.createTable("recipes", recipes => {
      recipes.increments("recipe_id");

      recipes.string("title", 255).notNullable();
      recipes.string("description", 255).notNullable();
      recipes.string("url", 255);
      recipes.timestamps(true, true );
  })
      .createTable("ingredients", ingredients => {
      ingredients.increments("ingredient_id");

      ingredients.string("ingredient", 255);
      ingredients.string("qty", 64);

      ingredients.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.recipe_id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  })
      .createTable("steps", steps => {
        steps.increments("step_id");
        steps.integer("step_num");
        steps.string("step", 255);

        steps.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipes.recipe_id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
      })
      .createTable("tags", tags => {
          tags.increments("tag_id");
          tags.string("tag");
      })
      .createTable("recipe_tags", table => {
          table.increments("recipetag_id");
          table.integer("recipe_id")
              .unsigned()
              .notNullable()
              .references("recipes.recipe_id")
              .onDelete("CASCADE")
              .onUpdate("CASCADE");
      })

};

exports.down = function(knex) {
    return knex.schema
        .dropTable("recipes")
        .dropTable("ingredients")
        .dropTable("steps")
        .dropTable("tags")
        .dropTable("recipe_tags");
};
