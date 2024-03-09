ServerEvents.recipes((event) => {
  AddEnderIORecipes(event);
});

/**
 * @param {Internal.RecipesEventJS} event
 */
function AddEnderIORecipes(event) {
  event.custom({
    type: "thermal:press",
    ingredients: [
      { item: "enderio:vibrant_alloy_ingot", count: 4 },
      { item: "thermal:press_gear_die" },
    ],
    results: [
      {
        item: "enderio:vibrant_gear",
      },
    ],
  });

  event.custom({
    type: "thermal:press",
    ingredients: [
      { item: "enderio:energetic_alloy_ingot", count: 4 },
      { item: "thermal:press_gear_die" },
    ],
    results: [
      {
        item: "enderio:energized_gear",
      },
    ],
  });

  event.custom({
    type: "thermal:press",
    ingredients: [
      { item: "enderio:dark_steel_ingot", count: 4 },
      { item: "thermal:press_gear_die" },
    ],
    results: [
      {
        item: "enderio:dark_bimetal_gear",
      },
    ],
  });
}
