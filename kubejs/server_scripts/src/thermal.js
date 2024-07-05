ServerEvents.recipes((event) => {
  // Remove items
  [
    "explosive_grenade",
    "ender_grenade",
    "glowstone_grenade",
    "redstone_grenade",
    "slime_grenade",
    "fire_grenade",
    "ice_grenade",
    "lightning_grenade",
    "earth_grenade",
    "phyto_grenade",
    "nuke_grenade",
    "ender_tnt",
    "glowstone_tnt",
    "redstone_tnt",
    "slime_tnt",
    "fire_tnt",
    "ice_tnt",
    "lightning_tnt",
    "earth_tnt",
    "phyto_tnt",
    "nuke_tnt",
    "device_hive_extractor",
    "device_tree_extractor",
    "device_fisher",
    "device_composter",
    "device_soil_infuser",
    "device_water_gen",
    "device_rock_gen",
    "device_collector",
    "device_xp_condenser",
    "device_nullifier",
    "device_potion_diffuser",
    "tinker_bench",
    "charge_bench",
    "rf_potato",
    "xp_crystal",
    "lock",
    "satchel",
    "detonator",
    "florb",
    "earth_charge",
    "ice_charge",
    "lightning_charge",
    "compost",
    "phytogro",
    "junk_net",
    "aquachow",
    "deep_aquachow",
    "beekeeper_fabric",
    "diving_fabric",
    "hazmat_fabric",
    "hazmat_helmet",
    "hazmat_chestplate",
    "hazmat_leggings",
    "hazmat_boots",
    "beekeeper_helmet",
    "beekeeper_chestplate",
    "beekeeper_leggings",
    "beekeeper_boots",
    "diving_helmet",
    "diving_chestplate",
    "diving_leggings",
    "diving_boots",
    "potion_duration_augment",
    "potion_amplifier_augment",
    "area_radius_augment",
    "dynamo_throttle_augment",
    "dynamo_fuel_augment",
    "dynamo_output_augment",
    "machine_null_augment",
    "machine_cycle_augment",
    "machine_catalyst_creative_augment",
    "machine_catalyst_augment",
    "machine_output_augment",
    "machine_efficiency_creative_augment",
    "machine_efficiency_augment",
    "machine_speed_augment",
    "item_filter_augment",
    "fluid_filter_augment",
    "xp_storage_augment",
    "side_config_augment",
    "rs_control_augment",
    "laser_diode",
    "blitz_rod",
    "blitz_powder",
    "blizz_rod",
    "blizz_powder",
    "basalz_powder",
    "basalz_rod",
    "rich_slag",
    "rosin",
    "tar",
    "bitumen",
    "coal_coke",
    "creosote",
    "crude_oil",
    "heavy_oil",
    "light_oil",
    "refined_fuel",
    "syrup",
    "tree_oil",
    ,
    "syrup_bottle",
  ].forEach((v) => {
    event.remove({
      output: `thermal:${v}`,
    });
  });
  event.remove({
    output: "#forge:coins",
  });
  event.remove({
    output: "#thermal:rockwool",
  });
  // Update rubber
  event.remove({
    output: "thermal:rubber",
  });
  event.recipes.create.milling("thermal:rubber", "#forge:rubberwood_logs");
  event.recipes.create.crushing(
    ["thermal:rubber", Item.of("thermal:rubber").withChance(0.7)],
    "#forge:rubberwood_logs"
  );
  // Update cured rubber
  event.remove({
    output: "thermal:cured_rubber",
  });
  event.smoking("thermal:cured_rubber", "thermal:rubber");
  event.recipes.create.pressing("kubejs:rubber_plate", "thermal:cured_rubber");
  // Update energy cell frame
  event.remove({
    output: "thermal:energy_cell_frame",
  });
  event.shaped("thermal:energy_cell_frame", ["xyx", "yzy", "xyx"], {
    x: "thermal:lead_plate",
    y: "thermal:electrum_plate",
    z: "minecraft:air",
  });
  event.custom({
    type: "create:item_application",
    ingredients: [
      {
        item: "thermal:energy_cell_frame",
      },
      {
        item: "minecraft:redstone_block",
      },
    ],
    results: [
      {
        item: "thermal:energy_cell",
      },
    ],
  });
  // Update fluid cell frame
  event.remove({
    output: "thermal:fluid_cell_frame",
  });
  event.shaped("thermal:fluid_cell_frame", ["xyx", "yzy", "xyx"], {
    x: "thermal:bronze_plate",
    y: "thermal:tin_plate",
    z: "#forge:glass",
  });
  event.custom({
    type: "create:item_application",
    ingredients: [
      {
        item: "thermal:fluid_cell_frame",
      },
      {
        item: "create:fluid_tank",
      },
    ],
    results: [
      {
        item: "thermal:fluid_cell",
      },
    ],
  });
  // Drill head
  event.shaped("thermal:drill_head", ["yxy", "xzx", "xxx"], {
    x: "minecraft:iron_ingot",
    y: "minecraft:air",
    z: "minecraft:copper_ingot",
  });
  // Saw blade
  event.shaped("thermal:saw_blade", ["xxy", "xzx", "yxx"], {
    x: "minecraft:iron_ingot",
    y: "minecraft:air",
    z: "minecraft:copper_ingot",
  });
  // Redstone servo
  event.remove({ output: "thermal:redstone_servo" });
  event.shaped("thermal:redstone_servo", ["xyx", "zyz", "xyx"], {
    y: "thermal:iron_plate",
    z: "minecraft:air",
    x: "minecraft:redstone",
  });
  // RF Coil
  event.remove({ output: "thermal:rf_coil" });
  event.shaped("thermal:rf_coil", ["xyz", "yoy", "zyx"], {
    y: "createaddition:gold_rod",
    x: "minecraft:air",
    z: "thermal:gold_plate",
    o: "minecraft:redstone_block",
  });
  // Bronze
  event.remove({
    output: "thermal:bronze_ingot",
    input: "minecraft:fire_charge",
  });
  event.remove({
    output: "thermal:bronze_dust",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.create
    .mixing("4x thermal:bronze_dust", [
      "3x thermal:copper_dust",
      "thermal:tin_dust",
    ])
    .heated();
  event.recipes.create
    .mixing("4x thermal:bronze_ingot", [
      "3x minecraft:copper_ingot",
      "thermal:tin_ingot",
    ])
    .superheated();
  // Electrum
  event.remove({
    output: "thermal:electrum_ingot",
    input: "minecraft:fire_charge",
  });
  event.remove({
    output: "thermal:electrum_dust",
    type: "minecraft:crafting_shapeless",
  });
  event.remove({
    output: "thermal:electrum_ingot",
    type: "create:mixing",
  });
  event.recipes.create
    .mixing("2x thermal:electrum_dust", [
      "thermal:gold_dust",
      "thermal:silver_dust",
    ])
    .heated();
  event.recipes.create
    .mixing("2x thermal:electrum_ingot", [
      "minecraft:gold_ingot",
      "thermal:silver_ingot",
    ])
    .superheated();
  // Invar
  event.remove({
    output: "thermal:invar_ingot",
    input: "minecraft:fire_charge",
  });
  event.remove({
    output: "thermal:invar_dust",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.create
    .mixing("3x thermal:invar_dust", [
      "2x thermal:copper_dust",
      "thermal:nickel_dust",
    ])
    .heated();
  event.recipes.create
    .mixing("3x thermal:invar_ingot", [
      "2x minecraft:iron_ingot",
      "thermal:nickel_ingot",
    ])
    .superheated();
  // Constantan
  event.remove({
    output: "thermal:constantan_ingot",
    input: "minecraft:fire_charge",
  });
  event.remove({
    output: "thermal:constantan_dust",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.create
    .mixing("2x thermal:constantan_dust", [
      "thermal:copper_dust",
      "thermal:nickel_dust",
    ])
    .heated();
  event.recipes.create
    .mixing("2x thermal:constantan_ingot", [
      "minecraft:copper_ingot",
      "thermal:nickel_ingot",
    ])
    .superheated();
  // Signalum
  event.remove({
    output: "thermal:signalum_ingot",
    input: "minecraft:fire_charge",
  });
  event.remove({
    output: "thermal:signalum_dust",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.create
    .mixing("4x thermal:signalum_dust", [
      "3x thermal:copper_dust",
      "thermal:silver_dust",
      "10x minecraft:redstone",
    ])
    .heated();
  event.recipes.create
    .mixing("4x thermal:signalum_ingot", [
      "3x minecraft:copper_ingot",
      "thermal:silver_ingot",
      "10x minecraft:redstone",
    ])
    .superheated();
  // Lumium
  event.remove({
    output: "thermal:lumium_ingot",
    input: "minecraft:fire_charge",
  });
  event.remove({
    output: "thermal:lumium_dust",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.create
    .mixing("4x thermal:lumium_dust", [
      "3x thermal:tin_dust",
      "thermal:silver_dust",
      "10x minecraft:glowstone_dust",
    ])
    .heated();
  event.recipes.create
    .mixing("4x thermal:lumium_ingot", [
      "3x thermal:tin_ingot",
      "thermal:silver_ingot",
      "10x minecraft:glowstone_dust",
    ])
    .superheated();
  // Enderium
  event.remove({
    output: "thermal:enderium_ingot",
    input: "minecraft:fire_charge",
  });
  event.remove({
    output: "thermal:enderium_dust",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.create
    .mixing("2x thermal:enderium_dust", [
      "3x thermal:lead_dust",
      "thermal:diamond_dust",
      "2x #forge:dusts/ender_pearl",
    ])
    .heated();
  event.recipes.create
    .mixing("2x thermal:enderium_ingot", [
      "3x thermal:lead_ingot",
      "minecraft:diamond",
      "2x minecraft:ender_pearl",
    ])
    .superheated();
});
