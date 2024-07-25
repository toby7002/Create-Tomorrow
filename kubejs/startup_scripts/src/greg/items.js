StartupEvents.registry("item", (e) => {
	// Glass Tube
	e.create("glass_tube")
		.displayName("Glass Tube")
		.texture("kubejs:item/greg/glass_tube");

	// Vacuum Tube
	e.create("vacuum_tube")
		.displayName("Vacuum Tube")
		.texture("kubejs:item/greg/vacuum_tube");

	// Sticky Resin
	e.create("sticky_resin")
		.displayName("Sticky Resin")
		.texture("kubejs:item/greg/sticky_resin");
});
