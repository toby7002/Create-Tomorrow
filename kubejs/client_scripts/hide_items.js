JEIEvents.hideItems((event) => {
  CreateNewAge(event);
  CreateAddition(event);
  TwilightForest(event);
});

/**
 * @param {Internal.HideJEIEventJS} event
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
    event.hide(`create_new_age:${recipe}`);
  });
}

/**
 * @param {Internal.HideJEIEventJS} event
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
    event.hide(`createaddition:${recipe}`);
  });
}

/**
 * @param {Internal.HideJEIEventJS} event
 */
function TwilightForest(event) {
  ["uncrafting_table"].forEach((recipe) => {
    event.hide(`twilightforest:${recipe}`);
  });
}