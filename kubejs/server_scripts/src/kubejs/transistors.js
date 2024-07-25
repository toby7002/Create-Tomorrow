ServerEvents.recipes((event) => {
	// Inductor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "kubejs:silicon_plate",
			},
			{
				count: 6,
				item: "kubejs:tin_wire",
			},
		],
		output: [
			{
				count: 8,
				item: "kubejs:transistors",
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
				count: 1,
				item: "kubejs:copper_foil",
			},
			{
				count: 8,
				item: "kubejs:ostrum_wire",
			},
		],
		output: [
			{
				count: 16,
				item: "kubejs:smd_transistors",
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
				count: 1,
				item: "kubejs:signalum_foil",
			},
			{
				count: 8,
				item: "kubejs:calorite_wire",
			},
		],
		output: [
			{
				count: 16,
				item: "kubejs:advanced_smd_transistors",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});

ServerEvents.tags("item", (e) => {
	e.add("kubejs:transistors", [
		"kubejs:advanced_smd_transistors",
		"kubejs:smd_transistors",
		"kubejs:transistors",
	]);
});
