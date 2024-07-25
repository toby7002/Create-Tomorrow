ServerEvents.recipes((event) => {
	// wrought iron ingot
	event.smelting("kubejs:wrought_iron_ingot", "minecraft:iron_ingot");
	// wrought iron plate
	event.recipes.create.pressing(
		"kubejs:wrought_iron_plate",
		"kubejs:wrought_iron_ingot"
	);
});
