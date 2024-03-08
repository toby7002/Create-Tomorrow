ServerEvents.recipes((event) => {
  replaceMaterialSets(event);
});

/**
 * @param {Internal.RecipesEventJS} event
 */
function replaceMaterialSets(event) {
  // Create
  ["zinc", "brass"].forEach((material) => {
    [
      "helmet",
      "chestplate",
      "leggings",
      "boots",
      "sword",
      "pickaxe",
      "axe",
      "shovel",
      "hoe",
    ].forEach((type) => {
      event.replaceInput(
        {
          input: `create:${material}_ingot`,
          output: `create_sa:${material}_${type}`,
        },
        `create:${material}_ingot`,
        `#forge:plates/${material}`
      );
    });
  });
}
