REIEvents.groupEntries((e) => {
	e.groupItemsByTag(
		"kubejs:rei_groups/candles",
		"Candles",
		"minecraft:candles"
	);
	e.groupItemsByTag(
		"kubejs:rei_groups/paintings",
		"Paintings",
		"minecraft:painting"
	);

	e.groupItems("kubejs:rei_groups/chipped", "Chipped", [
		Ingredient.of("@chipped").getItemIds(),
	]);

	e.groupItems("kubejs:rei_groups/rechiseled", "Rechiseled", [
		Ingredient.of("@rechiseled")
			.getItemIds()
			.filter((v) => v !== "rechiseled:chisel"),
	]);

	e.groupItems("kubejs:rei_groups/rechiseledcreate", "Rechiseled: Create", [
		Ingredient.of("@rechiseledcreate")
			.getItemIds()
			.filter((v) => v !== "rechiseledcreate:mechanical_chisel"),
	]);
});
