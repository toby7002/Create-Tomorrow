ServerEvents.recipes((event) => {
	// Processor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "kubejs:neuro_processing_unit",
			},
			{
				count: 1,
				item: "create:refined_radiance",
			},
			{
				count: 1,
				item: "kubejs:nano_cpu_chip",
			},

			{
				count: 8,
				item: "kubejs:advanced_smd_capacitor",
			},
			{
				count: 8,
				item: "kubejs:advanced_smd_transistors",
			},
			{
				count: 8,
				item: "kubejs:ostrum_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:ultimate_processor",
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
				item: "kubejs:wetware_printed_circuit_board",
			},
			{
				count: 2,
				item: "kubejs:ultimate_processor",
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
				count: 16,
				item: "kubejs:ostrum_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:ultimate_soc",
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
				item: "kubejs:wetware_printed_circuit_board",
			},
			{
				count: 16,
				item: "kubejs:nor_memory_chip",
			},
			{
				count: 8,
				item: "kubejs:advanced_smd_diode",
			},
			{
				count: 24,
				item: "kubejs:calorite_wire",
			},
			{
				count: 2,
				item: "kubejs:ultimate_soc",
			},
			{
				count: 32,
				item: "kubejs:ram_chip",
			},
		],
		output: [
			{
				count: 1,
				item: "kubejs:ultimate_computer",
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
				item: "kubejs:ultimate_computer",
			},
			{
				count: 32,
				item: "kubejs:advanced_smd_inductor",
			},
			{
				count: 32,
				item: "kubejs:advanced_smd_capacitor",
			},
			{
				count: 32,
				item: "kubejs:ram_chip",
			},
			{
				count: 32,
				item: "kubejs:advanced_smd_transistors",
			},
		],
		output: [
			{
				count: 1,
				item: "kubejs:ultimate_core",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
