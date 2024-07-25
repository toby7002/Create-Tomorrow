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
});
