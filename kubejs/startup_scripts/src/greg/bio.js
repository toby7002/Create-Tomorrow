StartupEvents.registry("item", (e) => {
	e.create("plant_ball").displayName("Plant Ball");
	e.create("bio_chaff").displayName("Bio Chaff");

	e.create("neuro_processing_unit").displayName("Neuro Processing Unit");
	e.create(
		"incomplete_neuro_processing_unit",
		"create:sequenced_assembly"
	).displayName("Incomplete Neuro Processing Unit").texture("kubejs:item/neuro_processing_unit");
	e.create("stem_cell").displayName("Stem Cell");
});
