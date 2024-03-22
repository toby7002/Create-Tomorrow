ServerEvents.recipes((event) => {
    // Remove
	["chest", "stick", "furnace"].forEach((recipe) => {
		event.remove({
			output: `minecraft:${recipe}`,
			mod: "minecraft",
		});
	});
	["metallurgic_infuser"].forEach((recipe) => {
		event.remove({
			output: `mekanism:${recipe}`,
			mod: "mekanism",
		});
	});
	// Add
	// Chest
	event.shaped("2x chest", ["XYX", "YZY", "XYX"], {
		X: "#minecraft:logs",
		Y: "#minecraft:planks",
		Z: "minecraft:stone_button",
	});
	event.shaped("chest", ["XYX", "YZY", "XYX"], {
		X: "#minecraft:logs",
		Y: "minecraft:stick",
		Z: "minecraft:stone_button",
	});
	// Stick
	event.shaped("2x stick", ["X", "X"], {
		X: "#minecraft:planks",
	});
	event.shaped("8x stick", ["X", "X"], {
		X: "#minecraft:logs",
	});
	// Furnace
	event.shaped("furnace", ["XYX", "ZOZ", "XYX"], {
		X: "compressedblocks:c0_cobblestone",
		Y: "#forge:cobblestone",
		Z: "minecraft:raw_copper",
		O: "#minecraft:coals",
	});
	// Mekanism Infuser
	event.shaped("mekanism:metallurgic_infuser", ["XOX", "ZAZ", "YOY"], {
		X: "create:brass_block",
		Z: "minecraft:blast_furnace",
		Y: "minecraft:netherite_block",
		O: "mekanism:block_osmium",
		A: "create:refined_radiance",
	});
});