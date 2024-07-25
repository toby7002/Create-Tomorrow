ServerEvents.recipes((event) => {
	event.remove({
		input: "iron_ingot",
		output: "extendedcrafting:black_iron_ingot",
	});

	// Black iron ingot
	event.custom({
		type: "enderio:alloy_smelting",
		energy: 20000,
		experience: 0.0,
		inputs: [
			{
				count: 1,
				ingredient: {
					item: "nuclearcraft:tough_alloy_ingot",
				},
			},
			{
				count: 1,
				ingredient: {
					item: "thermal:invar_block",
				},
			},
		],
		result: {
			count: 4,
			item: "extendedcrafting:black_iron_ingot",
		},
	});
	// Crystaltine ingot
	event.remove({ output: `extendedcrafting:crystaltine_ingot` });
	event.custom({
		type: "extendedcrafting:shaped_table",
		pattern: ["DLLLLLD", "DGINIGD", "DGINIGD", "DLLLLLD"],
		key: {
			D: {
				tag: "forge:gems/diamond",
			},
			L: {
				tag: "forge:gems/lapis",
			},
			N: {
				item: "thermal:enderium_ingot",
			},
			I: {
				tag: "forge:ingots/iron",
			},
			G: {
				tag: "forge:ingots/gold",
			},
		},
		result: {
			item: "extendedcrafting:crystaltine_ingot",
			count: 1,
		},
	});
	// Redstone ingot
	event.remove({ output: `extendedcrafting:redstone_ingot` });
	event.remove({ output: `extendedcrafting:enhanced_redstone_ingot` });

	event.replaceInput(
		{ input: "extendedcrafting:enhanced_redstone_ingot" },
		"extendedcrafting:enhanced_redstone_ingot",
		"thermal:signalum_ingot"
	);
	event.replaceInput(
		{ input: "extendedcrafting:redstone_ingot" },
		"extendedcrafting:redstone_ingot",
		"enderio:energetic_alloy_ingot"
	);
	// Ender ingot
	event.remove({ output: `extendedcrafting:ender_ingot` });
	event.remove({ output: `extendedcrafting:enhanced_ender_ingot` });

	event.replaceInput(
		{ input: "extendedcrafting:enhanced_ender_ingot" },
		"extendedcrafting:enhanced_ender_ingot",
		"thermal:enderium_ingot"
	);
	event.replaceInput(
		{ input: "extendedcrafting:ender_ingot" },
		"extendedcrafting:ender_ingot",
		"enderio:vibrant_alloy_ingot"
	);
	// Advanced table
	event.remove({ output: `extendedcrafting:advanced_table` });
	event.custom({
		type: "extendedcrafting:shaped_table",
		pattern: ["xXy", "OaY", "ozZ"],
		key: {
			x: { item: "extendedcrafting:advanced_component" },
			X: { item: "extendedcrafting:advanced_catalyst" },
			y: { item: "extendedcrafting:elite_component" },
			Y: { item: "extendedcrafting:elite_catalyst" },
			z: { item: "extendedcrafting:ultimate_component" },
			Z: { item: "extendedcrafting:ultimate_catalyst" },
			o: { item: "extendedcrafting:basic_component" },
			O: { item: "extendedcrafting:basic_catalyst" },
			a: { item: "extendedcrafting:basic_table" },
		},
		result: {
			item: "extendedcrafting:advanced_table",
		},
	});
	// elite table
	event.remove({ output: `extendedcrafting:elite_table` });
	event.custom({
		type: "extendedcrafting:shaped_table",
		pattern: ["xyzyx", "yabay", "cdedc", "yabay", "xyzyx"],
		key: {
			x: "industrialforegoing:machine_frame_advanced",
			y: "extendedcrafting:elite_component",
			z: "thermal:machine_frame",
			a: "create:shadow_steel",
			b: "extendedcrafting:advanced_table",
			c: "create:refined_radiance",
			d: "minecraft:nether_star",
			e: "ae2:molecular_assembler",
		},
		result: {
			item: "extendedcrafting:elite_table",
		},
	});
	// ultimate table
	event.remove({ output: `extendedcrafting:ultimate_table` });
	event.custom({
		type: "extendedcrafting:shaped_table",
		pattern: [
			"xyzozyx",
			"yXabaYy",
			"zacdcaz",
			"oefgfeo",
			"zacdcaz",
			"yZabaOy",
			"xyzozyx",
		],
		key: {
			x: { item: "thermal:machine_frame" },
			y: { item: "extendedcrafting:black_iron_block" },
			z: { item: "minecraft:nether_star" },
			o: { item: "kubejs:quantum_core" },
			X: { item: "thermal:enderium_block" },
			Y: { item: "ad_astra:calorite_block" },
			a: { item: "ad_astra:nasa_workbench" },
			b: { item: "nuclearcraft:assembler" },
			c: { item: "extendedcrafting:advanced_table" },
			d: { item: "extendedcrafting:elite_table" },
			e: { item: "industrialforegoing:machine_frame_supreme" },
			f: { item: "nuclearcraft:plate_extreme" },
			g: { item: "kubejs:octuple_compressed_cobblestone" },
			Z: { item: "ad_astra:desh_block" },
			O: { item: "ad_astra:ostrum_block" },
		},
		result: {
			item: "extendedcrafting:ultimate_table",
		},
	});
});
