ServerEvents.recipes((event) => {
	// Processor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "kubejs:resin_printed_circuit_board",
			},
			{
				count: 1,
				item: "kubejs:cpu_chip",
			},
			{
				count: 4,
				tag: "kubejs:resistors",
			},
			{
				count: 4,
				tag: "kubejs:capacitors",
			},
			{
				count: 4,
				tag: "kubejs:transistors",
			},
			{
				count: 4,
				item: "kubejs:desh_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:basic_processor",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
	// SOC
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "kubejs:resin_printed_circuit_board",
			},
			{
				count: 2,
				item: "kubejs:basic_processor",
			},
			{
				count: 4,
				tag: "kubejs:inductors",
			},
			{
				count: 8,
				tag: "kubejs:capacitors",
			},
			{
				count: 4,
				item: "kubejs:ram_chip",
			},
			{
				count: 8,
				item: "createaddition:electrum_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:basic_soc",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
	// COMPUTER
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "kubejs:gluic_printed_circuit_board",
			},
			{
				count: 2,
				item: "kubejs:basic_soc",
			},
			{
				count: 4,
				tag: "kubejs:diodes",
			},
			{
				count: 16,
				item: "createaddition:electrum_wire",
			},
			{
				count: 4,
				item: "kubejs:ram_chip",
			},
			{
				count: 16,
				item: "kubejs:desh_wire",
			},
		],
		output: [
			{
				count: 1,
				item: "kubejs:basic_computer",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
	// CORE
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 2,
				item: "nuclearcraft:steel_frame",
			},
			{
				count: 2,
				item: "kubejs:basic_computer",
			},
			{
				count: 6,
				tag: "kubejs:inductors",
			},
			{
				count: 12,
				tag: "kubejs:capacitors",
			},
			{
				count: 24,
				item: "kubejs:ram_chip",
			},
			{
				count: 48,
				item: "kubejs:desh_wire",
			},
		],
		output: [
			{
				count: 1,
				item: "kubejs:basic_core",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
