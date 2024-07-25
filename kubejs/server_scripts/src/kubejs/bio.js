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
});
