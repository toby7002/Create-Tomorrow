// priority: 1

ServerEvents.recipes((event) => {
  // Mekanism pipes
  ["basic", "advanced", "elite", "ultimate"].forEach((tier) => {
    [
      "universal_cable",
      "mechanical_pipe",
      "pressurized_tube",
      "logistical_transporter",
      "thermodynamic_conductor",
      "energy_cube",
    ].forEach((type) => {
      event.remove({ output: `mekanism:${tier}_${type}` });
    });
  });

  event.remove({ output: `mekanism:restrictive_transporter` });
  event.remove({ output: `mekanism:diversion_transporter` });

  // Vanilla
  event.forEachRecipe(
    {
      type: "minecraft:crafting_shapeless",
      input: "#minecraft:logs",
      output: "#minecraft:planks",
    },
    (recipe) => {
      const input = recipe.originalRecipeIngredients;
      const output = recipe.originalRecipeResult;

      event
        .shapeless(Item.of(output, 2), [Item.of(input[0])])
        .id(recipe.getOrCreateId());
    }
  );

  event.forEachRecipe(
    {
      type: "minecraft:crafting_shaped",
      input: "#minecraft:planks",
      output: "minecraft:stick",
    },
    (recipe) => {
      const input = recipe.originalRecipeIngredients;
      const output = recipe.originalRecipeResult;

      event.shaped(Item.of(output, 2), input).id(recipe.getOrCreateId());
    }
  );

  event.forEachRecipe(
    {
      type: "minecraft:crafting_shaped",
      input: "#minecraft:logs",
      output: "minecraft:stick",
    },
    (recipe) => {
      const input = recipe.originalRecipeIngredients;
      const output = recipe.originalRecipeResult;

      event.shaped(Item.of(output, 8), input).id(recipe.getOrCreateId());
    }
  );

  // Furnace
  event.remove({
    input: "minecraft:cobblestone",
    output: "minecraft:furnace",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("minecraft:furnace", ["xyx", "zoz", "xyx"], {
    x: "kubejs:compressed_cobblestone",
    y: "minecraft:cobblestone",
    z: "enderio:stone_gear",
    o: "#minecraft:coals",
  });

  // Glass
  event.forEachRecipe(
    {
      type: "minecraft:smelting",
      input: "minecraft:sand",
      output: "minecraft:glass",
    },
    (recipe) => {
      const output = recipe.originalRecipeResult;

      event
        .smelting(Item.of(output, 1), "kubejs:dust")
        .id(recipe.getOrCreateId());
    }
  );

  // Dust
  event.recipes.create.crushing(
    ["3x kubejs:dust", Item.of("kubejs:dust").withChance(0.5)],
    "minecraft:sand"
  );
  event.recipes.create.milling(
    ["1x kubejs:dust", Item.of("kubejs:dust").withChance(0.5)],
    "minecraft:sand"
  );

  // Compressed cobblestone
  event.shaped("kubejs:compressed_cobblestone", ["xxx", "xxx", "xxx"], {
    x: "minecraft:cobblestone",
  });

  // Gears
  event.remove({
    output: `enderio:wood_gear`,
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: `enderio:stone_gear`,
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: `enderio:iron_gear`,
    type: "minecraft:crafting_shaped",
  });

  event.shaped("enderio:wood_gear", ["xyx", "yzy", "xyx"], {
    x: "minecraft:stick",
    y: "#minecraft:planks",
    z: "minecraft:air",
  });
  event.shaped("enderio:stone_gear", ["xxx", "xyx", "xxx"], {
    x: "minecraft:cobblestone",
    y: "enderio:wood_gear",
  });
  event.shaped("enderio:iron_gear", ["xyx", "yzy", "xyx"], {
    x: "enderio:grains_of_infinity",
    y: "minecraft:iron_ingot",
    z: "enderio:stone_gear",
  });

  // Ender IO
  event.remove({
    output: `enderio:stirling_generator`,
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: `enderio:me_conduit`,
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: `enderio:dense_me_conduit`,
    type: "minecraft:crafting_shaped",
  });
});
