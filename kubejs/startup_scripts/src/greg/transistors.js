StartupEvents.registry("item", (e) => {
	e.create("transistors")
		.displayName("Transistor")
		.texture("kubejs:item/greg/transistors/transistor");
	e.create("smd_transistors")
		.displayName("SMD Transistor")
		.texture("kubejs:item/greg/transistors/smd_transistor");
	e.create("advanced_smd_transistors")
		.displayName("Advanced SMD Transistor")
		.texture("kubejs:item/greg/transistors/advanced_smd_transistor");
});
