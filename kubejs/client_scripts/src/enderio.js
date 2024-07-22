REIEvents.hide("item", (event) => {
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
		event.hide(`enderio:${item}`);
	});
});

REIEvents.hide("fluid", (event) => {
	// Remove fluids
	[
		"nutrient_distillation",
		"hootch",
		"rocket_fuel",
		"fire_water",
		"liquid_sunshine",
		"cloud_seed",
		"cloud_seed_concentrated",
	].forEach((item) => {
		event.hide(`enderio:${item}`);
		event.hide(`enderio:${item}_bucket`);
	});
});
