ServerEvents.tags("item", (event) => {
	event.add("forge:ingots/aluminum", "kubejs:aluminum_ingot");
});

ServerEvents.tags("block", (e) => {
	e.add("forge:storage_blocks/silicon", "kubejs:silicon_block");
});
