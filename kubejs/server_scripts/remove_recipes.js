ServerEvents.recipes((event) => {
  CreateNewAge(event);
  CreateAddition(event);
  TwilightForest(event);
});

/**
 * @param {Internal.RecipesEventJS} event
 */
function CreateNewAge(event) {
  [
    "energiser_t1",
    "energiser_t2",
    "energiser_t3",
    "carbon_brushes",
    "generator_coil",
    "magnetite_block",
    "redstone_magnet",
    "layered_magnet",
    "fluxuated_magnetite",
    "netherite_magnet",
  ].forEach((recipe) => {
    event.remove({
      output: `create_new_age:${recipe}`,
      mod: "create_new_age",
    });
  });
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function CreateAddition(event) {
  [
    "electric_motor",
    "connector",
    "large_connector",
    "small_light_connector",
    "spool",
    "copper_spool",
    "gold_spool",
    "electrum_spool",
    "festive_spool",
  ].forEach((recipe) => {
    event.remove({
      output: `createaddition:${recipe}`,
      mod: "createaddition",
    });
  });
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function TwilightForest(event) {
  ["uncrafting_table"].forEach((recipe) => {
    event.remove({
      output: `twilightforest:${recipe}`,
      mod: "twilightforest",
    });
  });
}