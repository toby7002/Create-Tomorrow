REIEvents.hide("item", (event) => {
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
		"rich_slag",
		"rosin",
		"tar",
		"bitumen",
		"coal_coke",
		"syrup_bottle",
		"creosote_bucket",
		"crude_oil_bucket",
		"heavy_oil_bucket",
		"light_oil_bucket",
		"refined_fuel_bucket",
		"syrup_bucket",
		"tree_oil_bucket",
		"press_packing_2x2_die",
		"press_packing_3x3_die",
		"press_unpacking_die",
		"press_coin_die",
		"machine_furnace",
		"machine_sawmill",
		"machine_pulverizer",
		"machine_smelter",
		"machine_centrifuge",
		"machine_refinery",
		"machine_pyrolyzer",
		"machine_bottler",
		"machine_crystallizer",
		"machine_crafter",
		"rf_coil_creative_augment",
		"fluid_tank_creative_augment",
		"dynamo_numismatic"
	].forEach((v) => {
		event.hide(`thermal:${v}`);
	});

	event.hide("#forge:coins");
	event.hide("#thermal:rockwool");
	event.hide("#thermal:crafting/casts");
});

REIEvents.hide("fluid", (event) => {
	[
		"creosote",
		"crude_oil",
		"heavy_oil",
		"light_oil",
		"refined_fuel",
		"syrup",
		"tree_oil",
	].forEach((v) => {
		event.hide(`thermal:${v}`);
	});
});
