ServerEvents.recipes((event) => {
  removeRecipes(event);
  addRecipes(event);
  replaceInputs(event);
  replaceMaterialSets(event);
  addGearRecipes(event);
});

function removeRecipes(event) {
  // Chest
  event.remove({ output: "chest", mod: "minecraft" });
  // Stick
  event.remove({ output: "stick", mod: "enderio" });
  event.remove({ output: "stick", mod: "minecraft" });
  // Furnace
  event.remove({ output: "furnace", mod: "minecraft" });
  // Uncrafting table
  event.remove({
    output: "twilightforest:uncrafting_table",
    mod: "twilightforest",
  });
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
  // Furnace
  event.shaped("furnace", ["XYX", "ZOZ", "XYX"], {
    X: "compressedblocks:c0_cobblestone",
    Y: "#forge:cobblestone",
    Z: "enderio:stone_gear",
    O: "#minecraft:coals",
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

/**
 * @param {Internal.RecipesEventJS} event
 */
function addGearRecipes(event) {
  event.remove({ mod: "enderio", output: "#forge:gears" });

  event.shaped("enderio:wood_gear", ["XYX", "YXY", "XYX"], {
    X: "minecraft:air",
    Y: "#minecraft:planks",
  });
  event.shaped("enderio:stone_gear", ["XYX", "YZY", "XYX"], {
    X: "#minecraft:planks",
    Y: "#forge:cobblestone",
    Z: "minecraft:air",
  });
  event.shaped("enderio:stone_gear", ["XYX", "YZY", "XYX"], {
    X: "minecraft:air",
    Y: "#forge:cobblestone",
    Z: "enderio:wood_gear",
  });
}
