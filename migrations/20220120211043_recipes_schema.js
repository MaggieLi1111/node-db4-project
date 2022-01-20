
exports.up = function(knex) {
  return knex.schema.createTable("recipes", table => {
      table.increments("recipe_id") 
      table.text("recipe_name", 128).notNullable().unique()
      table.datetime("created_at")

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipes")
};
