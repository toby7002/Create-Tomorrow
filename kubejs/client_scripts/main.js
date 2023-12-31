REIEvents.groupEntries((e) => {
	e.groupItems("kubejs:rei_groups/candles", "Candles", [
		"#minecraft:candles",
	]);
	e.groupItems("kubejs:rei_groups/beds", "Beds", ["#minecraft:beds"]);

	e.groupItems("kubejs:rei_groups/toolboxes", "Toolboxes", [
		"#create:toolboxes",
	]);

	e.groupItems("kubejs:rei_groups/chipped", "Chipped", [
		Ingredient.of("@chipped")
			.getItemIds()
			.filter(
				(item) =>
					item !== "chipped:mason_table" &&
					item !== "chipped:botanist_workbench" &&
					item !== "chipped:loom_table" &&
					item !== "chipped:glassblower" &&
					item !== "chipped:alchemy_bench" &&
					item !== "chipped:tinkering_table" && 
					item !== "chipped:carpenters_table" &&
					item !== "chipped:mechanist_workbench"
			),
	]);
});