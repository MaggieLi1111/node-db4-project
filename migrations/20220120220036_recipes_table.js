
exports.up = async function (knex) {
    return await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 120).notNullable().unique()
        table.timestamp('created_at')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 120).notNullable().unique()
        table.string('ingredient_unit', 60)
    })
    .createTable('recipe_steps', table => {
        table.increments('step_id')
        table.integer('step_number').notNullable()
        table.string('step_instructions').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('steps_ingredients', table => {
        table.increments('step_ingredient_id')
        table.float("ingredient_quantity").notNullable()
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('recipe_steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
