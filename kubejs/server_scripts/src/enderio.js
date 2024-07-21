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
});
