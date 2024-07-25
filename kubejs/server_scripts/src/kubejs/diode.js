ServerEvents.recipes((event) => {
	// Inductor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 4,
				item: "createaddition:copper_wire",
			},
			{
				count: 1,
				item: "kubejs:silicon_dust",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:diode",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
	// SMD inductor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 8,
				item: "kubejs:desh_wire",
			},
			{
				count: 1,
				item: "kubejs:silicon_dust",
			},
		],
		output: [
			{
				count: 8,
				item: "kubejs:smd_diode",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
	// Advanced SMD inductor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 8,
				item: "kubejs:calorite_wire",
			},
			{
				count: 1,
				item: "kubejs:silicon_dust",
			},
		],
		output: [
			{
				count: 8,
				item: "kubejs:advanced_smd_diode",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
