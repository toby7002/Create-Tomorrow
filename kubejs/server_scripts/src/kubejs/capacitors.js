ServerEvents.recipes((event) => {
	// Inductor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 2,
				item: "kubejs:aluminum_foil",
			},
			{
				count: 1,
				item: "kubejs:rubber_plate",
			},
		],
		output: [
			{
				count: 8,
				item: "kubejs:capacitor",
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
				count: 2,
				item: "kubejs:rubber_plate",
			},
			{
				count: 1,
				item: "kubejs:desh_foil",
			},
		],
		output: [
			{
				count: 8,
				item: "kubejs:smd_capacitor",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 2,
				item: "kubejs:rubber_plate",
			},
			{
				count: 1,
				item: "ad_astra:ostrum_foil",
			},
		],
		output: [
			{
				count: 16,
				item: "kubejs:smd_capacitor",
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
				count: 2,
				item: "nuclearcraft:hsla_steel_plate",
			},
			{
				count: 1,
				item: "kubejs:calorite_foil",
			},
		],
		output: [
			{
				count: 8,
				item: "kubejs:advanced_smd_capacitor",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
