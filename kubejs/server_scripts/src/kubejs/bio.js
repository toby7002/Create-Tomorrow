ServerEvents.recipes((event) => {
	event.recipes.create.compacting("kubejs:plant_ball", ["8x #forge:crops"]);
	event.recipes.create.compacting("kubejs:bio_chaff", [
		"2x kubejs:plant_ball",
	]);
	event.recipes.create.mixing(Fluid.of("kubejs:bacteria", 144), [
		Fluid.of("kubejs:distilled_water", 144),
		"kubejs:bio_chaff",
	]);
	event.recipes.create
		.mixing(Fluid.of("kubejs:distilled_water", 1000), [Fluid.water(1000)])
		.superheated();
	event.recipes.create.mixing("32x kubejs:stem_cell", [
		Fluid.of("kubejs:bacteria", 1000),
		"16x create:wheat_flour",
	]);
	const temp_neuro_processing_unit =
		"kubejs:incomplete_neuro_processing_unit";
	event.recipes.create
		.sequenced_assembly(
			["kubejs:neuro_processing_unit"],
			"kubejs:wetware_printed_circuit_board",
			[
				event.recipes.createFilling(temp_neuro_processing_unit, [
					temp_neuro_processing_unit,
					Fluid.of("kubejs:bacteria", 144),
				]),
				event.recipes.createDeploying(temp_neuro_processing_unit, [
					temp_neuro_processing_unit,
					"minecraft:glistering_melon_slice",
				]),
				event.recipes.createPressing(
					temp_neuro_processing_unit,
					temp_neuro_processing_unit
				),
			]
		)
		.transitionalItem(temp_neuro_processing_unit)
		.loops(5);
});
