ServerEvents.recipes((event) => {
  Minecraft(event);
  EnderIO(event);
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

  event.shaped("enderio:wood_gear", ["XYX", "YXY", "XYX"], {
    X: "minecraft:air",
    Y: "#minecraft:planks",
  });
  event.shaped("enderio:stone_gear", ["XYX", "YZY", "XYX"], {
    X: "#minecraft:planks",
    Y: "#forge:cobblestone",
    Z: "minecraft:air",
  });
}
