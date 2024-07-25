ServerEvents.recipes((event) => {
	// dust
	event.recipes.create.crushing(
		["3x kubejs:dust", Item.of("2x kubejs:dust").withChance(0.5)],
		"minecraft:sand"
	);
	event.recipes.create.milling(
		["kubejs:dust", Item.of("kubejs:dust").withChance(0.5)],
		"minecraft:sand"
	);
	// clay dust
	event.recipes.create.crushing(
		["kubejs:clay_dust", Item.of("kubejs:clay_dust").withChance(0.5)],
		"minecraft:clay_ball"
	);
	event.recipes.create.milling(["kubejs:clay_dust"], "minecraft:clay_ball");
	// brick dust
	event.recipes.create.crushing(
		["kubejs:brick_dust", Item.of("kubejs:brick_dust").withChance(0.5)],
		"minecraft:brick"
	);
	event.recipes.create.milling(["kubejs:brick_dust"], "minecraft:brick");
});
