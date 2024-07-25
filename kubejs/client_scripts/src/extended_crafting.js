REIEvents.hide("item", (event) => {
	// Remove items
	[
		"redstone_ingot",
		"enhanced_redstone_ingot",
		"ender_ingot",
		"enhanced_ender_ingot",
	].forEach((item) => {
		event.hide(`extendedcrafting:${item}`);
	});
});
