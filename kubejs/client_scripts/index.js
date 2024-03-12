"use strict";
REIEvents.groupEntries(function (event) {
	event.groupItems(
		"kubejs:rei_groups/rechiseledcreate",
		"Rechiseled: Create Blocks",
		[Ingredient.of("@rechiseledcreate").getItemIds()],
	);
	event.groupItems("kubejs:rei_groups/rechiseled", "Rechiseled Blocks", [
		Ingredient.of("@rechiseled")
			.getItemIds()
			.filter(function (item) {
				return item !== "rechiseled:chisel";
			}),
	]);
	event.groupItems("kubejs:rei_groups/chipped", "Chipped Blocks", [
		Ingredient.of("@chipped")
			.getItemIds()
			.filter(function (item) {
				return (
					item !== "chipped:mason_table" &&
					item !== "chipped:botanist_workbench" &&
					item !== "chipped:loom_table" &&
					item !== "chipped:glassblower" &&
					item !== "chipped:alchemy_bench" &&
					item !== "chipped:tinkering_table" &&
					item !== "chipped:carpenters_table" &&
					item !== "chipped:mechanist_workbench"
				);
			}),
	]);
});
REIEvents.hide("fluid", function (event) {
	CreateTheFactoryMustGrowFluids().forEach(function (fluid) {
		event.hide(fluid);
	});
});
function CreateTheFactoryMustGrowFluids() {
	function Fluids() {
		return ["molten_slag", "molten_steel"].map(function (fluid) {
			return "tfmg:".concat(fluid);
		});
	}
	return Fluids();
}
REIEvents.hide("item", function (event) {
	getMekanism()
		.concat(
			getCreateNewAge(),
			getCreateAddition(),
			getTwilightForest(),
			CreateTheFactoryMustGrowItems(),
		)
		.forEach(function (item) {
			event.hide(item);
		});
});
function getMekanism() {
	var materials = [
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
		].map(function (item) {
			return "mekanism:".concat(item);
		});
	}
	function getMekanismTools() {
		var types = ["swords", "pickaxes", "hoes", "axes", "shovels"];
		return materials
			.map(function (material) {
				return types.map(function (type) {
					return "tools/".concat(type, "/").concat(material);
				});
			})
			.reduce(function (prev, curr) {
				return prev.concat(curr);
			}, [])
			.map(function (item) {
				return "#forge:".concat(item);
			});
	}
	function getMekanismArmors() {
		var types = ["helmets", "chestplates", "leggings", "boots"];
		return materials
			.map(function (material) {
				return types.map(function (type) {
					return "armors/".concat(type, "/").concat(material);
				});
			})
			.reduce(function (prev, curr) {
				return prev.concat(curr);
			}, [])
			.map(function (item) {
				return "#forge:".concat(item);
			});
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
		].map(function (item) {
			return "create_new_age:".concat(item);
		});
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
		].map(function (item) {
			return "createaddition:".concat(item);
		});
	}
	return getCreateAdditionItems();
}
function getTwilightForest() {
	function getTwilightForestItems() {
		return ["uncrafting_table"].map(function (item) {
			return "twilightforest:".concat(item);
		});
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
		].map(function (item) {
			return "tfmg:".concat(item);
		});
	}
	return Items();
}
