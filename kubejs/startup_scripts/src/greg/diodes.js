StartupEvents.registry("item", (e) => {
	e.create("diode")
		.displayName("Diode")
		.texture("kubejs:item/greg/diodes/diode");
	e.create("smd_diode")
		.displayName("SMD Diode")
		.texture("kubejs:item/greg/diodes/smd_diode");
	e.create("advanced_smd_diode")
		.displayName("Advanced SMD Diode")
		.texture("kubejs:item/greg/diodes/advanced_smd_diode");
});
