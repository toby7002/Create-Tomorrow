ServerEvents.recipes((event) => {
	event.recipes.create.pressing(
		"kubejs:rubber_plate",
		"thermal:cured_rubber"
	);

	event.recipes.create.pressing(
		"kubejs:rubber_plate",
		"industrialforegoing:dryrubber"
	);
});
