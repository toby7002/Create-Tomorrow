// priority: 9999

ServerEvents.recipes((event) => {
	// Compressed cobblestone
	const compressed_block = (output, input) => {
		event.shaped(output, ["xxx", "xxx", "xxx"], { x: input });
	};
	compressed_block("kubejs:compressed_cobblestone", "minecraft:cobblestone");
	compressed_block(
		"kubejs:double_compressed_cobblestone",
		"kubejs:compressed_cobblestone"
	);
	compressed_block(
		"kubejs:triple_compressed_cobblestone",
		"kubejs:double_compressed_cobblestone"
	);
	compressed_block(
		"kubejs:quadruple_compressed_cobblestone",
		"kubejs:triple_compressed_cobblestone"
	);
	compressed_block(
		"kubejs:quintuple_compressed_cobblestone",
		"kubejs:quadruple_compressed_cobblestone"
	);
	compressed_block(
		"kubejs:sextuple_compressed_cobblestone",
		"kubejs:quintuple_compressed_cobblestone"
	);
	compressed_block(
		"kubejs:septuple_compressed_cobblestone",
		"kubejs:sextuple_compressed_cobblestone"
	);
	compressed_block(
		"kubejs:octuple_compressed_cobblestone",
		"kubejs:septuple_compressed_cobblestone"
	);
	// Dust
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
	// wrought iron ingot
	event.smelting("kubejs:wrought_iron_ingot", "minecraft:iron_ingot");
	// wrought iron plate
	event.recipes.create.pressing(
		"kubejs:wrought_iron_plate",
		"kubejs:wrought_iron_ingot"
	);
	// basic circuit
	event.recipes.create.filling("kubejs:basic_printed_circuit_board", [
		Fluid.of("thermal:resin"),
		"kubejs:basic_circuit_board",
	]);
  event.recipes.create.cutting("6x kubejs:basic_circuit_board", "#minecraft:wooden_slabs")
});
