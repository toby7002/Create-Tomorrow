ServerEvents.recipes((event) => {
	event.recipes.create
		.compacting("kubejs:silicon_boule", ["32x kubejs:silicon_dust"])
		.superheated();

	event.recipes.create
		.compacting("kubejs:desh_boule", [
			"64x kubejs:silicon_dust",
			"32x kubejs:desh_dust",
			"8x enderio:photovoltaic_composite",
		])
		.superheated();

	event.recipes.create
		.compacting("kubejs:ostrum_boule", [
			"16x kubejs:silicon_block",
			"32x kubejs:ostrum_dust",
			"8x thermal:enderium_dust",
		])
		.superheated();

	event.recipes.create
		.compacting("kubejs:calorite_boule", [
			"32x kubejs:silicon_block",
			"32x kubejs:calorite_dust",
			"8x kubejs:ostrum_dust",
			"8x kubejs:desh_dust",
		])
		.superheated();
});
