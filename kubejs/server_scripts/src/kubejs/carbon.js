ServerEvents.recipes((event) => {
	event.recipes.create.mixing("kubejs:carbon_fibers", [
		Fluid.of("kubejs:polyethylene", 114),
		"4x #forge:dusts/coal",
	]);

	event.recipes.create.compacting("kubejs:carbon_fiber_mesh", [
		"2x kubejs:carbon_fibers",
	]);

	event.recipes.create.compacting("kubejs:carbon_fiber_plate", [
		"2x kubejs:carbon_fiber_mesh",
	]);
});
