ServerEvents.recipes((event) => {
	event.smelting("kubejs:sticky_resin", "slime_ball");

	event.recipes.create
		.mixing(Fluid.of("kubejs:glue", 144), "kubejs:sticky_resin")
		.heated();
});
