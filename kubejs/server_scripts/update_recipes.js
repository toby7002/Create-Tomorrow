ServerEvents.recipes((event) => {
  Minecraft(event);
  EnderIO(event);
  UpdateThermalRecipes(event);
});

/**
 * @param {Internal.RecipesEventJS} event
 */
function Minecraft(event) {
  // Remove
  ["chest", "stick", "furnace"].forEach((recipe) => {
    event.remove({
      output: `minecraft:${recipe}`,
      mod: "minecraft",
    });
  });
  event.remove({
    output: `minecraft:stick`,
    mod: "enderio",
  });
  // Add
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
function EnderIO(event) {
  event.remove({ mod: "enderio", output: "#forge:gears" });
  event.remove({ mod: "enderio", output: "enderio:void_chassis" });
  event.remove({ mod: "enderio", output: "enderio:ensouled_chassis" });

  event.shaped("enderio:wood_gear", ["XYX", "YXY", "XYX"], {
    X: "minecraft:air",
    Y: "#minecraft:planks",
  });
  event.shaped("enderio:stone_gear", ["XYX", "YZY", "XYX"], {
    X: "#minecraft:planks",
    Y: "#forge:cobblestone",
    Z: "minecraft:air",
  });
  event.shaped("enderio:void_chassis", ["XYX", "OZO", "XYX"], {
    X: "#forge:plates/calorite",
    Y: "#forge:gears/iron",
    Z: "thermal:energy_cell_frame",
    O: "enderio:dark_steel_bars",
  });
  event.shaped("enderio:ensouled_chassis", ["XYX", "YZY", "XYX"], {
    X: "enderio:reinforced_obsidian_block",
    Y: "enderio:confusing_powder",
    Z: "enderio:void_chassis",
  });
  event.shaped("6x enderio:confusing_powder", ["XYZ", "YOY", "ZYX"], {
    X: "lapis_lazuli",
    Y: "enderio:organic_brown_dye",
    Z: "enderio:organic_green_dye",
    O: "enderio:organic_black_dye",
  });
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function UpdateThermalRecipes(event) {
}
