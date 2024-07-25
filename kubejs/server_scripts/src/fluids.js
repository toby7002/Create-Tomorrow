ServerEvents.recipes((event) => {
	[
		["ad_astra:desh_ingot", "kubejs:liquid_desh"],
		["ad_astra:ostrum_ingot", "kubejs:liquid_ostrum"],
		["ad_astra:calorite_ingot", "kubejs:liquid_calorite"],
	].forEach((item) =>
		event.custom({
			type: "nuclearcraft:melter",
			input: [
				{
					item: item[0],
				},
			],
			outputFluids: [
				{
					amount: 144,
					fluid: item[1],
				},
			],
			powerModifier: 1.0,
			radiation: 1.0,
			timeModifier: 1.0,
		})
	);

	event.recipes.create.mixing(
		[Fluid.of("kubejs:iron_3_chloride", 1000)],
		[Fluid.of("mekanism:hydrofluoric_acid", 3000), "thermal:iron_dust"]
	);
});
