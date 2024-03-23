REIEvents.hide("item", (event) => {
	getMekanism()
		.concat(
			getCreateNewAge(),
			getCreateAddition(),
			getTwilightForest(),
			CreateTheFactoryMustGrowItems(),
			AdAstra(),
		)
		.forEach((item) => {
			event.hide(item);
		});
});

function getMekanism() {
	const materials = [
		"refined_obsidian",
		"refined_glowstone",
		"bronze",
		"lapis_lazuli",
		"osmium",
		"steel",
	];

	function getMekanismItems() {
		return [
			"qio_drive_array",
			"qio_dashboard",
			"qio_exporter",
			"qio_importer",
			"qio_redstone_adapter",
			"portable_qio_dashboard",
			"qio_drive_base",
			"qio_drive_hyper_dense",
			"qio_drive_time_dilating",
			"qio_drive_supermassive",
			"scuba_mask",
			"scuba_tank",
		].map((item) => `mekanism:${item}`);
	}

	function getMekanismTools() {
		const types = ["swords", "pickaxes", "hoes", "axes", "shovels"];

		return materials
			.map((material) => types.map((type) => `tools/${type}/${material}`))
			.reduce((prev, curr) => prev.concat(curr), [])
			.map((item) => `#forge:${item}`);
	}

	function getMekanismArmors() {
		const types = ["helmets", "chestplates", "leggings", "boots"];

		return materials
			.map((material) =>
				types.map((type) => `armors/${type}/${material}`),
			)
			.reduce((prev, curr) => prev.concat(curr), [])
			.map((item) => `#forge:${item}`);
	}

	return getMekanismItems().concat(getMekanismTools(), getMekanismArmors());
}

function getCreateNewAge() {
	function getCreateNewAgeItems() {
		return [
			"energiser_t1",
			"energiser_t2",
			"energiser_t3",
			"carbon_brushes",
			"generator_coil",
			"magnetite_block",
			"redstone_magnet",
			"layered_magnet",
			"fluxuated_magnetite",
			"netherite_magnet",
		].map((item) => `create_new_age:${item}`);
	}

	return getCreateNewAgeItems();
}

function getCreateAddition() {
	function getCreateAdditionItems() {
		return [
			"electric_motor",
			"connector",
			"large_connector",
			"small_light_connector",
			"spool",
			"copper_spool",
			"gold_spool",
			"electrum_spool",
			"festive_spool",
		].map((item) => `createaddition:${item}`);
	}

	return getCreateAdditionItems();
}

function getTwilightForest() {
	function getTwilightForestItems() {
		return ["uncrafting_table"].map((item) => `twilightforest:${item}`);
	}

	return getTwilightForestItems();
}

function CreateTheFactoryMustGrowItems() {
	function Items() {
		return [
			"molten_slag_bucket",
			"molten_steel_bucket",
			"fireclay",
			"fireclay_ball",
			"fireproof_brick",
			"fireproof_bricks",
			"fireproof_brick_reinforcement",
			"blast_furnace_output",
			"block_mold",
			"ingot_mold",
			"casting_basin",
			"casting_spout",
			"slag",
			"blasting_mixture",
		].map((item) => `tfmg:${item}`);
	}

	return Items();
}

function AdAstra() {
	function Items() {
		return [
			"coal_generator",
			"compressor",
			"etrionic_blast_furnace",
			"solar_panel",
			"water_pump",
			"energizer",
		].map((item) => `ad_astra:${item}`);
	}

	return Items();
}
