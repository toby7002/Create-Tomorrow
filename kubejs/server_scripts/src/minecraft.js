ServerEvents.recipes((event) => {
  // 1 logs to 2 planks
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

  // 2 planks to 2 sticks
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

  // 2 logs to 8 sticks
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

  // furnace
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
  // replace iron ingots to iron sheets in tool recipes
  event.forEachRecipe(
    {
      type: "minecraft:crafting_shaped",
      input: "minecraft:iron_ingot",
      output: "#forge:tools",
    },
    (recipe) =>
      event.replaceInput(
        { id: recipe.getOrCreateId() },
        "minecraft:iron_ingot",
        "thermal:iron_plate"
      )
  );
  // replace iron ingots to iron sheets in armor recipes
  event.forEachRecipe(
    {
      type: "minecraft:crafting_shaped",
      input: "minecraft:iron_ingot",
      output: "#forge:armors",
    },
    (recipe) =>
      event.replaceInput(
        { id: recipe.getOrCreateId() },
        "minecraft:iron_ingot",
        "thermal:iron_plate"
      )
  );
  // replace gold ingots to golden sheets in tool recipes
  event.forEachRecipe(
    {
      type: "minecraft:crafting_shaped",
      input: "minecraft:gold_ingot",
      output: "#forge:tools",
    },
    (recipe) =>
      event.replaceInput(
        { id: recipe.getOrCreateId() },
        "minecraft:gold_ingot",
        "thermal:gold_plate"
      )
  );
  // replace gold ingots to golden sheets in armor recipes
  event.forEachRecipe(
    {
      type: "minecraft:crafting_shaped",
      input: "minecraft:gold_ingot",
      output: "#forge:armors",
    },
    (recipe) =>
      event.replaceInput(
        { id: recipe.getOrCreateId() },
        "minecraft:gold_ingot",
        "thermal:gold_plate"
      )
  );
  // glass
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
  // enchanting table
  event.remove({
    type: "minecraft:crafting_shaped",
    output: "minecraft:enchanting_table",
  });
  event.shaped("minecraft:enchanting_table", ["yoy", "zxz", "xxx"], {
    x: "minecraft:obsidian",
    z: "minecraft:golden_apple",
    y: "minecraft:diamond",
    o: "minecraft:book",
  });
  // jukebox
  event.replaceInput(
    { output: "minecraft:jukebox", type: "minecraft:crafting_shaped" },
    "minecraft:diamond",
    "etched:music_label"
  );
});
