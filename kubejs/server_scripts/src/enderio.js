ServerEvents.recipes((event) => {
	// Remove items
	[
		"stirling_generator",
		"primitive_alloy_smelter",
		"silicon",
		"flour",
		"powdered_cobalt",
		"powdered_ender_pearl",
		"powdered_quartz",
		"confusing_powder",
		"nutritious_stick",
		"plant_matter_green",
		"plant_matter_brown",
		"glider_wing",
		"cake_base",
		"clayed_glowstone",
		"alloy_smelter",
		"sag_mill",
		"fluid_tank",
		"pressurized_fluid_tank",
		"drain",
		"crafter",
	].forEach((item) => {
		event.remove({
			output: `enderio:${item}`,
		});
	});

	// Remove primitive alloy
	event.remove({
		type: "enderio:alloy_smelting",
	});
	// Add recipe for alloy
	event.recipes.create
		.mixing("2x enderio:copper_alloy_ingot", [
			"minecraft:iron_ingot",
			"minecraft:copper_ingot",
		])
		.heated();
	event.recipes.create
		.mixing("enderio:energetic_alloy_ingot", [
			"minecraft:redstone",
			"minecraft:gold_ingot",
			"minecraft:glowstone_dust",
		])
		.heated();
	// TODO: Make Base vibrant alloy from ingredients below and pour XP on it to make vibrant alloy
	event.recipes.create
		.mixing("enderio:vibrant_alloy_ingot", [
			"enderio:energetic_alloy_ingot",
			"minecraft:ender_pearl",
		])
		.heated();
	event.recipes.create
		.mixing("enderio:redstone_alloy_ingot", [
			"minecraft:redstone",
			"thermal:tin_ingot",
			"ae2:silicon",
		])
		.heated();
	event.recipes.create
		.mixing("enderio:conductive_alloy_ingot", [
			"2x minecraft:redstone",
			"thermal:tin_ingot",
		])
		.heated();
	event.recipes.create
		.mixing("enderio:pulsating_alloy_ingot", [
			"thermal:tin_ingot",
			"minecraft:ender_pearl",
		])
		.heated();
	event.recipes.create
		.mixing("enderio:dark_steel_ingot", [
			"mekanism:ingot_steel",
			"create:powdered_obsidian",
			"mekanism:dust_coal",
		])
		.heated();
	event.recipes.create
		.mixing("enderio:end_steel_ingot", [
			"mekanism:ingot_steel",
			"minecraft:end_stone",
			"thermal:ender_pearl_dust",
		])
		.heated();
	// Soul ingot
	event.recipes.create
		.mixing("enderio:soularium_ingot", [
			"minecraft:soul_sand",
			"minecraft:gold_ingot",
		])
		.heated();
	event.recipes.create.mixing("enderio:soul_powder", [
		"minecraft:soul_sand",
		"thermal:gold_dust",
	]);
	event.smelting("enderio:soularium_ingot", "enderio:soul_powder");
});
