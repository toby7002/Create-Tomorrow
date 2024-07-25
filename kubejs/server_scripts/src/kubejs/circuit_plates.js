ServerEvents.recipes((event) => {
	// Resin
	event.shaped("3x kubejs:resin_circuit_board", ["xxx", "yyy", "xxx"], {
		x: "kubejs:sticky_resin",
		y: "kubejs:wood_plate",
	});

	event.recipes.create.filling("kubejs:resin_printed_circuit_board", [
		Fluid.of("thermal:resin", 144),
		"kubejs:resin_circuit_board",
	]);

	// Gluic
	const temp_gluic_circuit_board =
		"kubejs:incomplete_gluic_printed_circuit_board";
	event.recipes.create
		.sequenced_assembly(
			["kubejs:gluic_circuit_board"],
			"#forge:dusts/wood",
			[
				event.recipes.createFilling(temp_gluic_circuit_board, [
					temp_gluic_circuit_board,
					Fluid.of("kubejs:glue", 16),
				]),
				event.recipes.createPressing(
					temp_gluic_circuit_board,
					temp_gluic_circuit_board
				),
			]
		)
		.transitionalItem(temp_gluic_circuit_board)
		.loops(3);
	event.recipes.create.filling("kubejs:gluic_printed_circuit_board", [
		Fluid.of("kubejs:liquid_desh", 144),
		"kubejs:gluic_circuit_board",
	]);
	// Plastic
	event.recipes.create.mixing("kubejs:plastic_circuit_board", [
		Fluid.of("mekanism:sulfuric_acid", 250),
		"4x kubejs:copper_foil",
		"kubejs:polyethylene_plate",
	]);
	event.recipes.create.mixing("kubejs:plastic_printed_circuit_board", [
		Fluid.of("kubejs:iron_3_chloride", 500),
		"6x kubejs:desh_foil",
		"kubejs:plastic_circuit_board",
	]);
	// Epoxy
	event.recipes.create.mixing("kubejs:epoxy_circuit_board", [
		Fluid.of("kubejs:liquid_desh", 500),
		"4x kubejs:gold_foil",
	]);
	event.recipes.create.mixing("kubejs:epoxy_printed_circuit_board", [
		Fluid.of("kubejs:iron_3_chloride", 500),
		"6x kubejs:ostrum_foil",
		"kubejs:epoxy_circuit_board",
	]);
	// Fiber reinforced
	event.recipes.create
		.mixing("kubejs:fiber_reinforced_circuit_board", [
			Fluid.of("mekanism:sulfuric_acid", 250),
			"4x kubejs:silver_foil",
			"kubejs:polyethylene_plate",
		])
		.superheated();
	event.recipes.create
		.mixing("kubejs:fiber_reinforced_printed_circuit_board", [
			Fluid.of("kubejs:iron_3_chloride", 500),
			"6x kubejs:ostrum_foil",
			"kubejs:fiber_reinforced_circuit_board",
		])
		.superheated();
	// Multi layer
	event.recipes.create
		.mixing("kubejs:multilayer_fiber_reinforced_circuit_board", [
			Fluid.of("mekanism:sulfuric_acid", 250),
			"4x kubejs:signalum_foil",
			"2x kubejs:fiber_reinforced_circuit_board",
		])
		.superheated();
	event.recipes.create
		.mixing("kubejs:multilayer_fiber_reinforced_printed_circuit_board", [
			Fluid.of("kubejs:iron_3_chloride", 500),
			"6x kubejs:calorite_foil",
			"kubejs:multilayer_fiber_reinforced_circuit_board",
		])
		.superheated();
	// Wetware
	event.recipes.create
		.mixing("kubejs:wetware_circuit_board", [
			Fluid.of("mekanism:sulfuric_acid", 250),
			Fluid.of("kubejs:bacteria", 250),
			Fluid.of("kubejs:glue", 500),
			"4x kubejs:calorite_foil",
			"#forge:dusts/wood",
		])
		.superheated();
	event.recipes.create
		.mixing("kubejs:wetware_printed_circuit_board", [
			Fluid.of("kubejs:iron_3_chloride", 500),
			Fluid.of("enderio:vapor_of_levity", 500),
			"kubejs:wetware_circuit_board",
		])
		.superheated();
});
