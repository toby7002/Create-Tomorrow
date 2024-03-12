REIEvents.groupEntries((event) => {
	event.groupItems(
		"kubejs:rei_groups/rechiseledcreate" as any,
		"Rechiseled: Create Blocks" as any,
		[Ingredient.of("@rechiseledcreate").getItemIds()] as any[],
	);

	event.groupItems(
		"kubejs:rei_groups/rechiseled" as any,
		"Rechiseled Blocks" as any,
		[
			(Ingredient.of("@rechiseled").getItemIds() as any).filter(
				(item: any) => item !== "rechiseled:chisel",
			),
		] as any[],
	);
	event.groupItems(
		"kubejs:rei_groups/chipped" as any,
		"Chipped Blocks" as any,
		[
			(Ingredient.of("@chipped").getItemIds() as any).filter(
				(item: any) =>
					item !== "chipped:mason_table" &&
					item !== "chipped:botanist_workbench" &&
					item !== "chipped:loom_table" &&
					item !== "chipped:glassblower" &&
					item !== "chipped:alchemy_bench" &&
					item !== "chipped:tinkering_table" &&
					item !== "chipped:carpenters_table" &&
					item !== "chipped:mechanist_workbench",
			),
		] as any[],
	);
});
