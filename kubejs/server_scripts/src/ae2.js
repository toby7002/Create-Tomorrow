ServerEvents.recipes((event) => {
	[
		"inscriber",
		"quantum_ring",
		"quantum_link",
		"drive",
		"molecular_assembler",
	].forEach((item) => {
		event.remove({
			output: `ae2:${item}`,
		});
	});

	// Energy acceptor
	event.remove({
		input: "iron_ingot",
		output: "ae2:energy_acceptor",
	});
	event.shaped("ae2:energy_acceptor", ["xyx", "ozo", "aba"], {
		x: "kubejs:advanced_computer",
		y: "create_new_age:netherite_magnet",
		o: "ae2:fluix_glass_cable",
		a: "ae2:fluix_block",
		b: "ae2:engineering_processor",
		z: "ae2:quartz_fixture",
	});

	// Inscriber
	event.shaped("ae2:inscriber", ["xyx", "oza", "xyx"], {
		x: "kubejs:double_compressed_cobblestone",
		y: "sticky_piston",
		o: "ae2:fluix_block",
		z: "air",
		a: "mekanism:block_steel",
	});

	// Controller
	event.remove({
		output: "ae2:controller",
	});
	event.shaped("ae2:controller", ["xyx", "ozo", "aba"], {
		x: "ae2:smooth_sky_stone_block",
		y: "kubejs:advanced_core",
		a: "mekanism:block_steel",
		o: "ae2:fluix_block",
		b: "ae2:fluix_pearl",
		z: "ae2:energy_acceptor",
	});

	// Quantum things
	event.shaped("ae2:quantum_ring", ["xyz", "yoy", "ayb"], {
		x: "ae2:fluix_pearl",
		y: "ae2:energy_cell",
		a: "ae2:logic_processor",
		o: "ae2:dense_cable",
		b: "ae2:calculation_processor",
		z: "ae2:engineering_processor",
	});
	event.shaped("ae2:quantum_link", ["xyx", "ozo", "xax"], {
		x: "ae2:quartz_vibrant_glass",
		y: "enderio:ender_crystal",
		a: "mekanism:teleportation_core",
		o: "ae2:fluix_pearl",
		z: "mekanism:quantum_entangloporter",
	});

	// Drive
	event.shaped("ae2:drive", ["xyx", "ozo", "xyx"], {
		x: "iron_ingot",
		y: "ae2:engineering_processor",
		o: "ae2:fluix_glass_cable",
		z: "computercraft:disk_drive",
	});
	// Molecular assembler
	event.shaped("ae2:molecular_assembler", ["xyx", "oza", "xyx"], {
		x: "thermal:iron_plate",
		y: "ae2:quartz_glass",
		o: "ae2:formation_core",
		z: "create:mechanical_crafter",
		a: "ae2:annihilation_core",
	});
});
