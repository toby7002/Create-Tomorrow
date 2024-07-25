ServerEvents.recipes((event) => {
	// Inductor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				item: "ad_astra:steel_rod",
			},
			{
				count: 2,
				item: "createaddition:copper_wire",
			},
		],
		output: [
			{
				count: 4,
				item: "kubejs:inductor",
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
				item: "kubejs:desh_rod",
			},
			{
				count: 4,
				item: "createaddition:electrum_wire",
			},
		],
		output: [
			{
				count: 16,
				item: "kubejs:smd_inductor",
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
				item: "kubejs:ostrum_rod",
			},
			{
				count: 4,
				item: "kubejs:calorite_wire",
			},
		],
		output: [
			{
				count: 16,
				item: "kubejs:advanced_smd_inductor",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});

ServerEvents.tags("item", (e) => {
	e.add("kubejs:inductors", [
		"kubejs:advanced_smd_inductor",
		"kubejs:smd_inductor",
		"kubejs:inductor",
	]);
});
