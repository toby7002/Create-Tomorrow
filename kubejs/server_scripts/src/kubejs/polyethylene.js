ServerEvents.recipes((event) => {
	event.recipes.create.pressing(
		"kubejs:polyethylene_plate",
		"kubejs:polyethylene_ingot"
	);

	event.custom({
		type: "tfmg:casting",
		ingredients: [
			{
				fluid: "kubejs:polyethylene",
				amount: 144,
			},
		],
		processingTime: 300,
		results: [
			{
				count: 1,
				item: "kubejs:polyethylene_ingot",
			},
		],
	});

	event.custom({
		type: "nuclearcraft:chemical_reactor",
		inputFluids: [
			{
				amount: 144,
				fluid: "mekanism:ethene",
			},
			{
				amount: 1000,
				fluid: "mekanism:oxygen",
			},
		],
		outputFluids: [
			{
				amount: 216,
				fluid: "kubejs:polyethylene",
			},
		],
		powerModifier: 1.0,
		radiation: 1.0,
		timeModifier: 1.0,
	});
});
