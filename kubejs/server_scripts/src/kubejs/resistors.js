ServerEvents.recipes((event) => {
	// Inductor
	event.custom({
		type: "nuclearcraft:assembler",
		input: [
			{
				count: 1,
				tag: "forge:dusts/coal",
			},
			{
				count: 4,
				item: "createaddition:copper_wire",
			},
		],
		output: [
			{
				count: 2,
				item: "kubejs:resistor",
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
				tag: "forge:dusts/coal",
			},
			{
				count: 4,
				item: "kubejs:desh_wire",
			},
		],
		output: [
			{
				count: 16,
				item: "kubejs:smd_resistor",
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
				tag: "forge:dusts/coal",
			},
			{
				count: 4,
				item: "kubejs:calorite_wire",
			},
		],
		output: [
			{
				count: 16,
				item: "kubejs:advanced_smd_resistor",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
