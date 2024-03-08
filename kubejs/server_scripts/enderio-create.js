ServerEvents.recipes((event) => {
    event.recipes.create.milling("enderio:powdered_coal", "minecraft:coal");
  
    registerSuperheatedMixingRecipes(event);
  });
  
  function registerSuperheatedMixingRecipes(event) {
    const recipes = [
      [
        ["enderio:copper_alloy_ingot"],
        ["copper_ingot", "ae2:silicon", "enderio:powdered_coal"],
      ],
      [
        ["enderio:energetic_alloy_ingot"],
        ["redstone", "glowstone", "ad_astra:calorite_ingot"],
      ],
      [
        ["enderio:vibrant_alloy_ingot"],
        ["ender_pearl", "enderio:energetic_alloy_ingot"],
      ],
      [["enderio:redstone_alloy_ingot"], ["redstone", "ae2:silicon"]],
      [["enderio:conductive_alloy_ingot"], ["redstone", "ad_astra:desh_ingot"]],
      [["enderio:pulsating_alloy_ingot"], ["ender_pearl", "ad_astra:desh_ingot"]],
      [["enderio:soularium_ingot"], ["soul_sand", "ad_astra:ostrum_ingot"]],
      [
        ["enderio:end_steel_ingot"],
        ["end_stone", "obsidian", "enderio:dark_steel_ingot"],
      ],
      [
        ["enderio:dark_steel_ingot"],
        ["ad_astra:ostrum_ingot", "obsidian", "enderio:powdered_coal"],
      ],
    ];
  
    recipes.forEach((v) => {
      event.recipes.create.mixing(v[0], v[1]).superheated();
    });
  }
  