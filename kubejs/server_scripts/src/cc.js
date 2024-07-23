ServerEvents.recipes((event) => {
	["disk_drive"].forEach((item) => {
		event.remove({ output: `computercraft:${item}` });
	});

	// Add recipe for disk drive
	event.shaped("computercraft:disk_drive", ["xyx", "abc", "xzx"], {
		x: "iron_ingot",
		y: "kubejs:basic_soc",
		a: "sticky_piston",
		b: "thermal:iron_plate",
		c: "air",
		z: "kubejs:basic_printed_circuit_board",
	});
});
