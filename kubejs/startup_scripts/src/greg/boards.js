StartupEvents.registry("item", (e) => {
	// Resin Circuit Board
	e.create("resin_circuit_board")
		.displayName("Resin Circuit Board")
		.texture("kubejs:item/greg/boards/resin_circuit_board");
	// Resin Printed Circuit Board
	e.create("resin_printed_circuit_board")
		.displayName("Resin Printed Circuit Board")
		.texture("kubejs:item/greg/boards/resin_printed_circuit_board");
	// Gluic Circuit Board
	e.create("gluic_circuit_board")
		.displayName("Gluic Circuit Board")
		.texture("kubejs:item/greg/boards/phenolic_circuit_board");
	// Incomplete Gluic Printed Circuit Board
	e.create(
		"incomplete_gluic_printed_circuit_board",
		"create:sequenced_assembly"
	)
		.displayName("Incomplete Gluic Printed Circuit Board")
		.texture("kubejs:item/greg/boards/phenolic_circuit_board");
	// Gluic Printed Circuit Board
	e.create("gluic_printed_circuit_board")
		.displayName("Gluic Printed Circuit Board")
		.texture("kubejs:item/greg/boards/phenolic_printed_circuit_board");
	// Plastic Circuit Board
	e.create("plastic_circuit_board")
		.displayName("Plastic Circuit Board")
		.texture("kubejs:item/greg/boards/plastic_circuit_board");
	// Plastic Printed Circuit Board
	e.create("plastic_printed_circuit_board")
		.displayName("Plastic Printed Circuit Board")
		.texture("kubejs:item/greg/boards/plastic_printed_circuit_board");
	// Epoxy Circuit Board
	e.create("epoxy_circuit_board")
		.displayName("Epoxy Circuit Board")
		.texture("kubejs:item/greg/boards/epoxy_circuit_board");
	// Epoxy Printed Circuit Board
	e.create("epoxy_printed_circuit_board")
		.displayName("Epoxy Printed Circuit Board")
		.texture("kubejs:item/greg/boards/epoxy_printed_circuit_board");
	// Fiber-Reinforced Circuit Board
	e.create("fiber_reinforced_circuit_board")
		.displayName("Fiber-Reinforced Circuit Board")
		.texture("kubejs:item/greg/boards/fiber_reinforced_circuit_board");
	// Fiber-Reinforced Printed Circuit Board
	e.create("fiber_reinforced_printed_circuit_board")
		.displayName("Fiber-Reinforced Printed Circuit Board")
		.texture(
			"kubejs:item/greg/boards/fiber_reinforced_printed_circuit_board"
		);
	// Multi-Layer Fiber-Reinforced Circuit Board
	e.create("multilayer_fiber_reinforced_circuit_board")
		.displayName("Multi-Layer Fiber-Reinforced Circuit Board")
		.texture(
			"kubejs:item/greg/boards/multilayer_fiber_reinforced_circuit_board"
		);
	// Multi-Layer Fiber-Reinforced Printed Circuit Board
	e.create("multilayer_fiber_reinforced_printed_circuit_board")
		.displayName("Multi-Layer Fiber-Reinforced Printed Circuit Board")
		.texture(
			"kubejs:item/greg/boards/multilayer_fiber_reinforced_printed_circuit_board"
		);
	// Wetware Circuit Board
	e.create("wetware_circuit_board")
		.displayName("Wetware Circuit Board")
		.texture("kubejs:item/greg/boards/wetware_circuit_board");
	// Wetware Printed Circuit Board
	e.create("wetware_printed_circuit_board")
		.displayName("Wetware Printed Circuit Board")
		.texture("kubejs:item/greg/boards/wetware_printed_circuit_board");
});
