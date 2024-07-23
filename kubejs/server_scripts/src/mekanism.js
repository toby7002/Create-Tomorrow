ServerEvents.recipes((event) => {
	[
		"crafting_formula",
		"portable_qio_dashboard",
		"qio_drive_base",
		"qio_drive_hyper_dense",
		"qio_drive_time_dilating",
		"qio_drive_supermassive",
		"qio_drive_array",
		"qio_dashboard",
		"qio_importer",
		"qio_exporter",
		"qio_redstone_adapter",
		"hdpe_elytra",
		"basic_tier_installer",
		"advanced_tier_installer",
		"elite_tier_installer",
		"ultimate_tier_installer",
		"basic_control_circuit",
		"advanced_control_circuit",
		"elite_control_circuit",
		"ultimate_control_circuit",
		"robit",
		"scuba_mask",
		"scuba_tank",
		"jetpack",
		"metallurgic_infuser",
	].forEach((item) => {
		event.remove({ output: `mekanism:${item}` });
	});

	event.forEachRecipe(
		{ input: "mekanism:basic_control_circuit" },
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"mekanism:basic_control_circuit",
				"kubejs:basic_computer"
			);
		}
	);

	event.forEachRecipe(
		{ input: "mekanism:advanced_control_circuit" },
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"mekanism:advanced_control_circuit",
				"kubejs:advanced_computer"
			);
		}
	);

	event.forEachRecipe(
		{ input: "mekanism:elite_control_circuit" },
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"mekanism:elite_control_circuit",
				"kubejs:elite_computer"
			);
		}
	);

	event.forEachRecipe(
		{ input: "mekanism:ultimate_control_circuit" },
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"mekanism:ultimate_control_circuit",
				"kubejs:ultimate_computer"
			);
		}
	);

	event.shaped("mekanism:free_runners", ["xyx", "zaz", "oyo"], {
		x: "kubejs:basic_soc",
		y: "air",
		a: "diamond_boots",
		z: "mekanism:alloy_infused",
		o: "mekanism:energy_tablet",
	});

	event.shaped("mekanism:flamethrower", ["xxx", "xyz", "aba"], {
		x: "ad_astra:steel_plate",
		y: "mekanism:advanced_chemical_tank",
		z: "flint_and_steel",
		a: "thermal:bronze_ingot",
		b: "mekanism:basic_soc",
	});

	event.shaped("mekanism:jetpack", ["xyx", "aba", "aca"], {
		x: "mekanism:ingot_steel",
		y: "elytra",
		a: "thermal:bronze_plate",
		b: "mekanism:advanced_chemical_tank",
		c: "kubejs:elite_soc",
	});

	event.shaped("mekanism:metallurgic_infuser", ["xxx", "yzy", "yoy"], {
		x: "mekanism:ingot_osmium",
		y: "furnace",
		z: "mekanism:steel_casing",
		o: "create:blaze_burner",
	});

	event.forEachRecipe({ output: "mekanism:dictionary" }, (recipe) => {
		event.replaceInput(
			{ id: recipe.getOrCreateId() },
			"kubejs:basic_computer",
			"kubejs:basic_soc"
		);
	});

	event.shaped("mekanism:portable_teleporter", ["xyx", "aba", "xyx"], {
		x: "air",
		y: "mekanism:energy_tablet",
		a: "kubejs:basic_soc",
		b: "mekanism:teleportation_core",
	});

	event.forEachRecipe({ output: "mekanism:configuration_card" }, (recipe) => {
		event.replaceInput(
			{ id: recipe.getOrCreateId() },
			"kubejs:basic_computer",
			"kubejs:basic_soc"
		);
	});

	event.forEachRecipe({ output: "mekanism:mekasuit_helmet" }, (recipe) => {
		event.replaceInput(
			{ id: recipe.getOrCreateId() },
			"kubejs:ultimate_computer",
			"kubejs:quantum_computer"
		);
	});

	event.forEachRecipe({ output: "mekanism:mekasuit_boots" }, (recipe) => {
		event.replaceInput(
			{ id: recipe.getOrCreateId() },
			"kubejs:ultimate_computer",
			"kubejs:quantum_computer"
		);
	});

	event.forEachRecipe({ output: "mekanism:mekasuit_bodyarmor" }, (recipe) => {
		event.replaceInput(
			{ id: recipe.getOrCreateId() },
			"kubejs:ultimate_computer",
			"kubejs:quantum_computer"
		);
	});

	event.forEachRecipe({ output: "mekanism:mekasuit_pants" }, (recipe) => {
		event.replaceInput(
			{ id: recipe.getOrCreateId() },
			"kubejs:ultimate_computer",
			"kubejs:quantum_computer"
		);
	});

	event.shaped("mekanism:basic_tier_installer", ["xyx", "aba", "xyx"], {
		x: "mekanism:alloy_infused",
		y: "kubejs:advanced_core",
		a: "mekanism:ingot_steel",
		b: "mekanism:steel_casing",
	});

	event.shaped("mekanism:advanced_tier_installer", ["xyx", "aba", "xyx"], {
		x: "mekanism:alloy_reinforced",
		y: "kubejs:elite_core",
		a: "thermal:lumium_ingot",
		b: "mekanism:steel_casing",
	});

	event.shaped("mekanism:elite_tier_installer", ["xyx", "aba", "xyx"], {
		x: "mekanism:alloy_atomic",
		y: "kubejs:ultimate_core",
		a: "netherite_ingot",
		b: "mekanism:steel_casing",
	});

	event.shaped("mekanism:ultimate_tier_installer", ["xyx", "aba", "xyx"], {
		x: "mekanism:alloy_atomic",
		y: "kubejs:quantum_core",
		a: "nuclearcraft:titanium_ingot",
		b: "mekanism:steel_casing",
	});

	event.shaped("mekanism:digital_miner", ["xyx", "aba", "ded"], {
		x: "mekanism:alloy_atomic",
		y: "kubejs:ultimate_core",
		a: "thermal:machine_frame",
		b: "computercraft:turtle_normal",
		d: "mekanism:teleporter",
		e: "computercraft:computer_advanced",
	});

	event.shaped("mekanism:rotary_condensentrator", ["xyx", "abc", "xyx"], {
		x: "glass",
		y: "kubejs:basic_computer",
		a: "mekanism:basic_chemical_tank",
		b: "mekanism:energy_tablet",
		c: "mekanism:basic_fluid_tank",
	});

	event.shaped("mekanism:chemical_oxidizer", ["xyx", "abc", "xyx"], {
		x: "kubejs:double_compressed_cobblestone",
		y: "kubejs:basic_computer",
		a: "mekanism:basic_chemical_tank",
		b: "mekanism:basic_fluid_tank",
		c: "mekanism:personal_chest",
	});

	event.shaped("mekanism:chemical_injection_chamber", ["xyx", "aba", "xyx"], {
		x: "thermal:sulfur_dust",
		y: "kubejs:basic_computer",
		a: "thermal:electrum_block",
		b: "mekanism:purification_chamber",
	});

	event.shaped("mekanism:purification_chamber", ["xyx", "aba", "xyx"], {
		x: "mekanism:alloy_infused",
		y: "kubejs:basic_computer",
		a: "mekanism:ingot_osmium",
		b: "mekanism:enrichment_chamber",
	});

	event.shaped("mekanism:enrichment_chamber", ["xyx", "aba", "xyx"], {
		x: "redstone",
		y: "kubejs:basic_computer",
		a: "iron_ingot",
		b: "mekanism:steel_casing",
	});

	event.shaped(
		"mekanism:chemical_dissolution_chamber",
		["xyx", "aba", "xyx"],
		{
			x: "mekanism:alloy_atomic",
			y: "mekanism:ultimate_chemical_tank",
			a: "mekanism:dynamic_valve",
			b: "thermal:sulfur_block",
		}
	);

	event.shaped("mekanism:chemical_washer", ["xcx", "aba", "xyx"], {
		x: "mekanism:alloy_atomic",
		y: "mekanism:ultimate_chemical_tank",
		a: "mekanismgenerators:fission_reactor_port",
		b: "sponge",
		c: "nuclearcraft:dense_water_collector",
	});

	event.shaped(
		"mekanism:pressurized_reaction_chamber",
		["xyx", "aba", "oco"],
		{
			x: "mekanism:ingot_steel",
			y: "mekanism:alloy_infused",
			a: "kubejs:advanced_computer",
			b: "mekanism:enrichment_chamber",
			c: "mekanism:dynamic_tank",
			o: "mekanism:basic_chemical_tank",
		}
	);

	event.shaped("mekanism:isotopic_centrifuge", ["xxx", "yzy", "xxx"], {
		x: "nuclearcraft:stainless_steel_ingot",
		y: "kubejs:basic_computer",
		z: "mekanism:basic_chemical_tank",
	});

	event.shaped("mekanism:chemical_infuser", ["xyx", "aba", "xyx"], {
		x: "mekanism:dynamic_valve",
		y: "kubejs:advanced_computer",
		a: "mekanism:ultimate_chemical_tank",
		b: "rftoolsbase:infused_diamond",
	});
});
