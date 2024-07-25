ServerEvents.recipes((event) => {
	// Remove generators
	event.remove({
		output: "ad_astra:coal_generator",
	});

	// Nasa workbench
	event.remove({
		output: "ad_astra:nasa_workbench",
	});

	event.custom({
		type: "extendedcrafting:shaped_table",
		pattern: ["yyMyy", "yzMzy", "oabao", "oacao", "xxxxx"],
		key: {
			x: { item: "enderio:dark_steel_block" },
			M: { item: "minecraft:air" },
			y: { item: "ad_astra:steel_rod" },
			z: { item: "industrialforegoing:laser_lens0" },
			o: { item: "thermal:constantan_plate" },
			a: { item: "mekanism:basic_energy_cube" },
			c: { item: "computercraft:computer_advanced" },
			b: { item: "kubejs:basic_soc" },
		},
		result: {
			item: "ad_astra:nasa_workbench",
		},
	});
});
