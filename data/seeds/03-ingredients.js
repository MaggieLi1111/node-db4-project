
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient_name: 'olive oil', ingredient_unit: "TBSP"},
    { ingredient_name: 'Chuck Roast'},
    { ingredient_name: 'Bread', ingredient_unit: "Slice(s)"},
    { ingredient_name: 'Pasta', ingredient_unit: "Box"},
    { ingredient_name: 'Water', ingredient_unit: "Ounces"},
    { ingredient_name: 'Marinara Sauce', ingredient_unit: "Cups"},
  ]);
};