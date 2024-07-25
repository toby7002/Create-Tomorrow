ServerEvents.recipes((event) => {
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
});
