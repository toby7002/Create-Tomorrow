ServerEvents.recipes((event) => {
	// Processor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "kubejs:gluic_printed_circuit_board",
			},
			{
				count: 1,
				item: "kubejs:nano_cpu_chip",
			},
			{
				count: 8,
				item: "kubejs:smd_resistor",
			},
			{
				count: 8,
				item: "kubejs:smd_capacitor",
			},
			{
				count: 8,
				item: "kubejs:smd_transistors",
			},
			{
				count: 8,
				item: "kubejs:desh_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:advanced_processor",
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
				item: "kubejs:gluic_printed_circuit_board",
			},
			{
				count: 2,
				item: "kubejs:advanced_processor",
			},
			{
				count: 4,
				item: "kubejs:smd_inductor",
			},
			{
				count: 8,
				item: "kubejs:smd_capacitor",
			},
			{
				count: 8,
				item: "kubejs:ram_chip",
			},
			{
				count: 8,
				item: "kubejs:desh_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:advanced_soc",
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
				item: "kubejs:epoxy_printed_circuit_board",
			},
			{
				count: 32,
				item: "kubejs:nor_memory_chip",
			},
			{
				count: 64,
				item: "kubejs:nand_memory_chip",
			},
			{
				count: 32,
				item: "kubejs:ostrum_wire",
			},
			{
				count: 2,
				item: "kubejs:advanced_soc",
			},
			{
				count: 4,
				item: "kubejs:ram_chip",
			},
		],
		output: [
			{
				count: 1,
				item: "kubejs:advanced_computer",
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
				item: "rftoolsbase:machine_frame",
			},
			{
				count: 2,
				item: "kubejs:basic_computer",
			},
			{
				count: 16,
				item: "kubejs:smd_inductor",
			},
			{
				count: 32,
				item: "kubejs:smd_capacitor",
			},
			{
				count: 16,
				item: "kubejs:ram_chip",
			},
			{
				count: 32,
				item: "kubejs:ostrum_wire",
			},
		],
		output: [
			{
				count: 1,
				item: "kubejs:advanced_core",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
