REIEvents.hide("item", (event) => {
	// Remove items
	[
		"crafting_formula",
		"portable_qio_dashboard",
		"qio_drive_base",
		"qio_drive_hyper_dense",
		"qio_drive_time_dilating",
		"qio_drive_supermassive",
		"qio_drive_array",
		"qio_dashboard",
		"qio_importer",
		"qio_exporter",
		"qio_redstone_adapter",
		"hdpe_elytra",
		"basic_control_circuit",
		"advanced_control_circuit",
		"elite_control_circuit",
		"ultimate_control_circuit",
		"robit",
		"scuba_mask",
		"scuba_tank",
		"jetpack",
		"fluidic_plenisher",
	].forEach((item) => {
		event.hide(`mekanism:${item}`);
	});
});
