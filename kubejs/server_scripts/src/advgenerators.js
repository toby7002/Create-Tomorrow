ServerEvents.recipes((event) => {
	[
		"iron_frame",
		"power_io",
		"iron_tubing",
		"iron_wiring",
		"controller",
		"pressure_valve",
		"advanced_pressure_valve",
		"upgrade_kit",
		"turbine_rotor_tier4",
		"turbine_rotor_tier5",
		"turbine_kit_tier4",
		"turbine_kit_tier5",
		"capacitor_kit_tier2",
		"capacitor_kit_tier3",
	].forEach((item) => {
		event.remove({ output: `advgenerators:${item}` });
	});
	event.remove({
		output: "advgenerators:turbine_rotor_tier4",
		input: "thermal:invar_ingot",
	});
	event.remove({
		output: "advgenerators:turbine_rotor_tier4",
		input: "advgenerators:alloy_reinforced",
	});

	event.shaped("advgenerators:iron_frame", ["xyx", "yay", "xyx"], {
		x: "createaddition:iron_rod",
		y: "iron_bars",
		a: "air",
	});

	event.shaped("advgenerators:power_io", ["xyx", "yay", "xyx"], {
		x: "thermal:bronze_gear",
		y: "redstone",
		a: "mekanism:basic_energy_cube",
	});

	event.shaped("4x advgenerators:iron_tubing", ["xyz", "yzy", "zyx"], {
		y: "createaddition:iron_wire",
		z: "createaddition:iron_rod",
		x: "air",
	});

	event.shaped("4x advgenerators:iron_wiring", ["xyz", "yzy", "zyx"], {
		y: "createaddition:electrum_wire",
		z: "createaddition:electrum_rod",
		x: "air",
	});

	event.replaceInput(
		{ input: "advgenerators:controller" },
		"advgenerators:controller",
		"kubejs:basic_computer"
	);

	event.shaped("advgenerators:pressure_valve", ["xyx", "yzy", "xyx"], {
		x: "mekanism:dynamic_valve",
		y: "advgenerators:iron_tubing",
		z: "iron_trapdoor",
	});

	event.shaped(
		"advgenerators:advanced_pressure_valve",
		["xxx", "xyx", "xxx"],
		{
			x: "thermal:enderium_plate",
			y: "advgenerators:pressure_valve",
		}
	);

	event.shaped("32x advgenerators:upgrade_kit", ["xyx", "yay", "xyx"], {
		x: "air",
		y: "thermal:iron_plate",
		a: "iron_ingot",
	});

	event.replaceInput(
		{ output: "advgenerators:turbine_rotor_tier2" },
		"gold_nugget",
		"thermal:gold_plate"
	);
	event.replaceInput(
		{ output: "advgenerators:turbine_kit_tier2" },
		"gold_nugget",
		"thermal:gold_plate"
	);

	event.replaceInput(
		{ output: "advgenerators:turbine_rotor_tier3" },
		"thermal:bronze_ingot",
		"thermal:bronze_plate"
	);
	event.replaceInput(
		{ output: "advgenerators:turbine_kit_tier3" },
		"thermal:bronze_ingot",
		"thermal:bronze_plate"
	);

	event.shaped("advgenerators:turbine_rotor_tier4", ["xxx", "xyx", "xxx"], {
		x: "ad_astra:steel_plate",
		y: "advgenerators:turbine_rotor_tier3",
	});

	event.shaped("advgenerators:turbine_rotor_tier5", ["xxx", "xyx", "xxx"], {
		x: "thermal:enderium_plate",
		y: "advgenerators:turbine_rotor_tier4",
	});
	event.shaped("advgenerators:turbine_kit_tier4", ["xxx", "xyx", "xxx"], {
		x: "ad_astra:steel_plate",
		y: "advgenerators:turbine_kit_tier3",
	});

	event.shaped("advgenerators:turbine_kit_tier5", ["xxx", "xyx", "xxx"], {
		x: "thermal:enderium_plate",
		y: "advgenerators:turbine_kit_tier4",
	});

	event.shaped("advgenerators:capacitor_kit_tier2", ["xyx", "xax"], {
		x: "advgenerators:iron_wiring",
		y: "enderio:energetic_alloy_ingot",
		a: "advgenerators:upgrade_kit",
	});
	event.shaped("advgenerators:capacitor_kit_tier3", ["xyx", "xax"], {
		x: "advgenerators:iron_wiring",
		y: "thermal:signalum_ingot",
		a: "advgenerators:upgrade_kit",
	});
});
