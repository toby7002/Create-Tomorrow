ServerEvents.recipes((event) => {
  // update hull recipe
  event.replaceInput(
    {
      output: "immersive_aircraft:hull",
      type: "minecraft:crafting_shaped",
    },
    "#minecraft:logs",
    "kubejs:steel_casing"
  );
  // update engine
  event.remove({
    output: "immersive_aircraft:engine",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:engine", ["xyx", "oao", "yzy"], {
    x: "create:fluid_tank",
    y: "minecraft:iron_block",
    z: "immersive_aircraft:boiler",
    o: "minecraft:piston",
    a: "create:blaze_burner",
  });
  // update boiler
  event.remove({
    output: "immersive_aircraft:boiler",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:boiler", ["xyx", "yzy", "xox"], {
    x: "minecraft:copper_ingot",
    y: "minecraft:copper_block",
    z: "create:fluid_tank",
    o: "minecraft:smoker",
  });
  // update sail
  event.remove({
    output: "immersive_aircraft:sail",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:sail", ["xxy", "xxz", "xxy"], {
    x: "#minecraft:wool",
    y: "minecraft:string",
    z: "minecraft:slime_block",
  });
  // update propeller
  event.remove({
    output: "immersive_aircraft:propeller",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:propeller", ["xxz", "zyz", "zxx"], {
    x: "create:iron_sheet",
    y: "createaddition:iron_rod",
    z: "minecraft:air",
  });
  // update heavy crossbow
  event.remove({
    output: "immersive_aircraft:heavy_crossbow",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:heavy_crossbow", ["xyx", "zoz", "axa"], {
    x: "ad_astra:steel_rod",
    y: "ad_astra:steel_plate",
    o: "minecraft:crossbow",
    a: "minecraft:air",
    z: "createaddition:iron_wire",
  });
  // update telescope
  event.remove({
    output: "immersive_aircraft:telescope",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:telescope", ["axy", "xox", "zxa"], {
    x: "create:copper_sheet",
    y: "#enderio:clear_glass",
    o: "minecraft:spyglass",
    a: "minecraft:air",
    z: "createaddition:copper_rod",
  });
  // update bomb bay
  event.remove({
    output: "immersive_aircraft:bomb_bay",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:bomb_bay", ["xyx", "xzx", "ozo"], {
    x: "mekanism:ingot_steel",
    y: "minecraft:tnt",
    o: "ad_astra:steel_plate",
    z: "minecraft:air",
  });
  // update enhanced propeller TODO: Use dark steel sheet
  event.remove({
    output: "immersive_aircraft:enhanced_propeller",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:enhanced_propeller", ["xxz", "zyz", "zxx"], {
    x: "enderio:dark_steel_ingot",
    y: "immersive_aircraft:propeller",
    z: "minecraft:air",
  });
  // update eco engine
  event.remove({
    output: "immersive_aircraft:eco_engine",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:eco_engine", ["xyx", "yzy", "ooo"], {
    x: "#minecraft:leaves",
    y: "enderio:energetic_alloy_ingot",
    o: "mekanism:ingot_tin",
    z: "immersive_aircraft:engine",
  });
  // update nether engine
  event.remove({
    output: "immersive_aircraft:nether_engine",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:nether_engine", ["xyx", "yzy", "ooo"], {
    x: "minecraft:blaze_powder",
    y: "minecraft:netherite_ingot",
    o: "minecraft:nether_brick",
    z: "immersive_aircraft:engine",
  });
  // update steel boiler
  event.remove({
    output: "immersive_aircraft:steel_boiler",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:steel_boiler", ["xyx", "yzy", "xox"], {
    x: "mekanism:ingot_steel",
    y: "mekanism:block_steel",
    z: "immersive_aircraft:boiler",
    o: "minecraft:smoker",
  });
  // update industrial gears
  event.remove({
    output: "immersive_aircraft:industrial_gears",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:industrial_gears", ["oxx", "zyx", "zzo"], {
    x: "mekanism:ingot_steel",
    y: "enderio:iron_gear",
    z: "mekanism:ingot_bronze",
    o: "minecraft:air",
  });
  // update sturdy pipes
  event.remove({
    output: "immersive_aircraft:sturdy_pipes",
    type: "minecraft:crafting_shaped",
  });
  event.shaped("immersive_aircraft:sturdy_pipes", ["xzz", "yzz", "xzz"], {
    x: "create:sturdy_sheet",
    y: "create:fluid_pipe",
    z: "minecraft:air",
  });
  // update hull reinforcement recipe
  event.replaceInput(
    {
      output: "immersive_aircraft:hull_reinforcement",
      type: "minecraft:crafting_shaped",
    },
    "minecraft:iron_ingot",
    "mekanism:ingot_steel"
  );
  // update improved landing gear
  event.remove({
    output: "immersive_aircraft:improved_landing_gear",
    type: "minecraft:crafting_shaped",
  });
  event.shaped(
    "immersive_aircraft:improved_landing_gear",
    ["xxx", "xyx", "xxx"],
    {
      x: "create:sturdy_sheet",
      y: "mekanism:ingot_steel",
    }
  );
});
