ServerEvents.recipes((event) => {
	[
		"heat_pipe",
		"heat_pump",
		"heater",
		"stirling_engine",
		"solid_corium",
		"corium",
		"reactor_casing",
		"reactor_rod",
		"reactor_glass",
		"reactor_fuel_acceptor",
		"reactor_heat_vent",
		"basic_solar_heating_plate",
		"advanced_solar_heating_plate",
		"nuclear_fuel",
		"incomplete_fuel",
		"incomplete_casing",
		"incomplete_wire",
		"incomplete_enchanted_golden_apple",
	].forEach((item) => {
		event.remove({ output: `create_new_age:${item}` });
	});

	event.forEachRecipe(
		{
			output: "create_new_age:basic_motor",
		},
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"minecraft:iron_nugget",
				"thermal:iron_plate"
			);
		}
	);

	event.forEachRecipe(
		{
			output: "create_new_age:advanced_motor",
		},
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"minecraft:gold_nugget",
				"thermal:gold_plate"
			);
		}
	);

	event.forEachRecipe(
		{
			output: "create_new_age:basic_motor_extension",
		},
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"create_new_age:overcharged_iron",
				"create_new_age:overcharged_iron_sheet"
			);
		}
	);

	event.forEachRecipe(
		{
			output: "create_new_age:carbon_brushes",
		},
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"create:andesite_alloy",
				"ad_astra:steel_plate"
			);
		}
	);

	event.forEachRecipe(
		{
			output: "create_new_age:generator_coil",
		},
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"minecraft:copper_ingot",
				"create_new_age:copper_wire"
			);
		}
	);

	event.shaped("create_new_age:magnetite_block", ["xxx", "xyx", "xxx"], {
		x: "thermal:iron_dust",
		y: "minecraft:iron_block",
	});

	event.forEachRecipe(
		{
			output: "create_new_age:redstone_magnet",
		},
		(recipe) => {
			event.replaceInput(
				{ id: recipe.getOrCreateId() },
				"minecraft:iron_nugget",
				"minecraft:redstone"
			);
		}
	);

	event.remove({ output: "create_new_age:layered_magnet" });
	event.shaped("create_new_age:layered_magnet", ["xxx", "xyx", "xxx"], {
		x: "create_new_age:overcharged_golden_sheet",
		y: "minecraft:gold_block",
	});

	event.remove({ output: "create_new_age:fluxuated_magnetite" });
	event.shaped("create_new_age:fluxuated_magnetite", ["xxx", "xyx", "xxx"], {
		x: "create_new_age:overcharged_diamond",
		y: "create_new_age:magnetite_block",
	});

	event.remove({ output: "create_new_age:netherite_magnet" });
	event.shaped("create_new_age:netherite_magnet", ["xyx", "yzy", "xyx"], {
		x: "netherite_scrap",
		y: "create_new_age:overcharged_diamond",
		z: "diamond_block",
	});
});
