ServerEvents.recipes((event) => {
	// Processor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "kubejs:epoxy_printed_circuit_board",
			},
			{
				count: 1,
				item: "kubejs:qbit_cpu_chip",
			},
			{
				count: 1,
				item: "kubejs:nano_cpu_chip",
			},

			{
				count: 12,
				item: "kubejs:smd_capacitor",
			},
			{
				count: 12,
				item: "kubejs:smd_transistors",
			},
			{
				count: 12,
				item: "kubejs:ostrum_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:elite_processor",
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
				item: "kubejs:epoxy_printed_circuit_board",
			},
			{
				count: 2,
				item: "kubejs:elite_processor",
			},
			{
				count: 4,
				item: "kubejs:smd_inductor",
			},
			{
				count: 16,
				item: "kubejs:smd_capacitor",
			},
			{
				count: 4,
				item: "kubejs:ram_chip",
			},
			{
				count: 8,
				item: "kubejs:ostrum_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:elite_soc",
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
				item: "kubejs:fiber_reinforced_printed_circuit_board",
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
				item: "kubejs:calorite_wire",
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
				item: "kubejs:elite_computer",
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
				item: "thermal:machine_frame",
			},
			{
				count: 2,
				item: "kubejs:elite_computer",
			},
			{
				count: 6,
				item: "kubejs:advanced_smd_inductor",
			},
			{
				count: 12,
				item: "kubejs:advanced_smd_capacitor",
			},
			{
				count: 24,
				item: "kubejs:ram_chip",
			},
			{
				count: 48,
				item: "kubejs:calorite_wire",
			},
		],
		output: [
			{
				count: 1,
				item: "kubejs:elite_core",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
