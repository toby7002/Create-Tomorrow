ServerEvents.recipes((event) => {
  // remove recipes
  ["gold_upgrade", "diamond_upgrade", "ender_drawer"].forEach((v) => {
    event.remove({
      output: `functionalstorage:${v}`,
      type: "minecraft:crafting_shaped",
    });
  });
});
