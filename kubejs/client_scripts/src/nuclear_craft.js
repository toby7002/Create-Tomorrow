REIEvents.hide("item", (event) => {
	event.hide("#forge:isotopes");
	event.hide("#nuclearcraft:reactor_fuel");
	event.hide(/.*heat_sink/);
});

REIEvents.groupEntries((event) => {
	event.groupItems("kubejs:rei_groups/nuclearcraft", "NuclearCraft", [
		Ingredient.of("/nuclearcraft:[^_]+_bucket/").getItemIds(),
	]);
});
