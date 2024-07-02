ServerEvents.recipes((event) => {
  // Steel casing
  event.recipes.create.deploying("kubejs:steel_casing", [
    "#forge:stripped_logs",
    "mekanism:ingot_steel",
  ]);

  // Compressed cobblestone
  const compressed_block = (output, input) => {
    event.shaped(output, ["xxx", "xxx", "xxx"], { x: input });
  };
  compressed_block("kubejs:compressed_cobblestone", "minecraft:cobblestone");
  compressed_block(
    "kubejs:double_compressed_cobblestone",
    "kubejs:compressed_cobblestone"
  );
  compressed_block(
    "kubejs:triple_compressed_cobblestone",
    "kubejs:double_compressed_cobblestone"
  );
  compressed_block(
    "kubejs:quadruple_compressed_cobblestone",
    "kubejs:triple_compressed_cobblestone"
  );
  compressed_block(
    "kubejs:quintuple_compressed_cobblestone",
    "kubejs:quadruple_compressed_cobblestone"
  );
  compressed_block(
    "kubejs:sextuple_compressed_cobblestone",
    "kubejs:quintuple_compressed_cobblestone"
  );
  compressed_block(
    "kubejs:septuple_compressed_cobblestone",
    "kubejs:sextuple_compressed_cobblestone"
  );
  compressed_block(
    "kubejs:octuple_compressed_cobblestone",
    "kubejs:septuple_compressed_cobblestone"
  );

  // Dust
  event.recipes.create.crushing(
    ["3x kubejs:dust", Item.of("2x kubejs:dust").withChance(0.5)],
    "minecraft:sand"
  );
  event.recipes.create.milling(
    ["kubejs:dust", Item.of("kubejs:dust").withChance(0.5)],
    "minecraft:sand"
  );
});
