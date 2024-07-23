ServerEvents.recipes((event) => {
  //disable item
  [
    "plastic_pipe",
    "plastic_mechanical_pump",
    "plastic_smart_fluid_pipe",
    "plastic_fluid_valve",
  ].forEach((v) => {
    event.remove({ output: `tfmg:${v}`, type: "minecraft:crafting_shaped" });
  });
  // update steel tank
  event.replaceInput(
    {
      output: "tfmg:steel_fluid_tank",
      type: "minecraft:crafting_shaped",
    },
    "mekanism:ingot_steel",
    "ad_astra:steel_plate"
  );
  // update cement
  event.forEachRecipe(
    {
      output: "tfmg:cement",
      type: "create:mixing",
    },
    (recipe) => {
      event.recipes.create
        .mixing(Item.of("tfmg:cement", 1), [
          "kubejs:clay_dust",
          "tfmg:limesand",
        ])
        .id(recipe.getOrCreateId());
    }
  );
  // replace cast iron ingot to wrought iron ingot
  event.replaceInput(
    { input: "tfmg:cast_iron_ingot" },
    "tfmg:cast_iron_ingot",
    "kubejs:wrought_iron_ingot"
  );
  // replace wrought iron ingot to wrought iron plate
  event.replaceInput(
    {
      output: "tfmg:cast_iron_distillation_output",
      type: "minecraft:crafting_shaped",
    },
    "kubejs:wrought_iron_ingot",
    "kubejs:wrought_iron_plate"
  );
  event.replaceInput(
    {
      output: "tfmg:cast_iron_distillation_controller",
      type: "create:mechanical_crafting",
    },
    "kubejs:wrought_iron_ingot",
    "kubejs:wrought_iron_plate"
  );
  // update case iron pipe
  event.remove({
    output: "tfmg:cast_iron_pipe",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("3x tfmg:cast_iron_pipe", ["xxx", "yyy", "xxx"], {
    x: "kubejs:wrought_iron_plate",
    y: "create:fluid_pipe",
  });
  // update exhaust
  event.replaceInput(
    {
      output: "tfmg:exhaust",
      type: "minecraft:crafting_shaped",
    },
    "kubejs:wrought_iron_ingot",
    "kubejs:wrought_iron_plate"
  );
  // update surface scanner
  event.replaceInput(
    {
      output: "tfmg:surface_scanner",
      type: "create:mechanical_crafting",
    },
    "create:copper_sheet",
    "create:brass_sheet"
  );
  // update steel pipe
  event.remove({
    output: "tfmg:steel_pipe",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("3x tfmg:steel_pipe", ["xxx", "yyy", "xxx"], {
    x: "ad_astra:steel_plate",
    y: "create:fluid_pipe",
  });
  // update industrial pipe
  event.forEachRecipe(
    {
      output: "tfmg:industrial_pipe",
      type: "minecraft:stonecutting",
    },
    (recipe) => {
      const input = recipe.originalRecipeIngredients;
      const output = recipe.originalRecipeResult;

      event.stonecutting(Item.of(output, 3), input).id(recipe.getOrCreateId());
    }
  );
  // update rebar
  event.forEachRecipe(
    {
      output: "tfmg:rebar",
      type: "minecraft:stonecutting",
    },
    (recipe) => {
      const input = recipe.originalRecipeIngredients;
      const output = recipe.originalRecipeResult;

      event.stonecutting(Item.of(output, 2), input).id(recipe.getOrCreateId());
    }
  );
  // update casting spout
  event.replaceInput(
    {
      output: "tfmg:casting_spout",
      type: "minecraft:crafting_shaped",
    },
    "create:framed_glass",
    "create:spout"
  );
  // update concrete mixture
  event.forEachRecipe(
    {
      output: "tfmg:concrete_mixture",
      type: "create:mixing",
    },
    (recipe) => {
      const input = recipe.originalRecipeIngredients;
      const output = recipe.originalRecipeResult;

      event.recipes.create
        .mixing(Item.of(output, 8), input)
        .id(recipe.getOrCreateId());
    }
  );
  // update turbine blade recipe
  event.remove({
    output: "tfmg:turbine_blade",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("tfmg:turbine_blade", ["xxx", "xyx", "xxx"], {
    x: "tfmg:aluminum_ingot",
    y: "immersive_aircraft:enhanced_propeller",
  });
  // update screw
  event.forEachRecipe(
    {
      output: "tfmg:screw",
      type: "minecraft:stonecutting",
    },
    (recipe) => {
      const output = recipe.originalRecipeResult;

      event
        .stonecutting(Item.of(output, 4), "ad_astra:steel_rod")
        .id(recipe.getOrCreateId());
    }
  );
  // update brass pipe
  event.remove({
    output: "tfmg:brass_pipe",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("3x tfmg:brass_pipe", ["xxx", "yyy", "xxx"], {
    x: "create:brass_sheet",
    y: "create:fluid_pipe",
  });
  // update aluminum pipe
  event.remove({
    output: "tfmg:aluminum_pipe",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("3x tfmg:aluminum_pipe", ["xxx", "yyy", "xxx"], {
    x: "tfmg:aluminum_ingot",
    y: "create:fluid_pipe",
  });
});

ServerEvents.tags("item", (event) => {
	event.add("forge:dusts/sulfur", "tfmg:sulfur_dust");
});
