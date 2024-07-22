ServerEvents.recipes((event) => {
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
		"elite_tier_installer",
		"ultimate_tier_installer",
	].forEach((item) => {
		event.remove({ output: `mekanism:${item}` });
	});
});
