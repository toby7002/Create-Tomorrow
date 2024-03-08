ServerEvents.recipes((event) => {
  removeRecipes(event);
  addRecipes(event);
  replaceInputs(event);
  replaceMaterialSets(event);
});

function removeRecipes(event) {
  // Chest
  event.remove({ output: "chest", mod: "minecraft" });
  // Stick
  event.remove({ output: "stick", mod: "enderio" });
  event.remove({ output: "stick", mod: "minecraft" });
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function addRecipes(event) {
  // Chest
  event.shaped("2x chest", ["XYX", "YZY", "XYX"], {
    X: "#minecraft:logs",
    Y: "#minecraft:planks",
    Z: "minecraft:stone_button",
  });
  event.shaped("chest", ["XYX", "YZY", "XYX"], {
    X: "#minecraft:logs",
    Y: "minecraft:stick",
    Z: "minecraft:stone_button",
  });
  // Stick
  event.shaped("2x stick", ["X", "X"], {
    X: "#minecraft:planks",
  });
  event.shaped("8x stick", ["X", "X"], {
    X: "#minecraft:logs",
  });
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function replaceInputs(event) {}

/**
 * @param {Internal.RecipesEventJS} event
 */
function replaceMaterialSets(event) {
  // Vanilla
  ["iron", "gold", "copper"].forEach((material) => {
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
          input: `${material}_ingot`,
          output:
            material === "copper"
              ? `create_sa:${material}_${type}`
              : material === "gold"
              ? `${material}en_${type}`
              : `${material}_${type}`,
        },
        `${material}_ingot`,
        `#forge:plates/${material}`
      );
    });
  });
}
