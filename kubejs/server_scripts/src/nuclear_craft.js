ServerEvents.recipes((event) => {
	["plate_basic", "plate_advanced", "plate_du", "plate_elite"].forEach(
		(item) => {
			event.remove({ output: `nuclearcraft:${item}` });
		}
	);

	// Disable fuels
	event.remove({ output: "#forge:isotopes" });
	event.remove({ output: "#nuclearcraft:reactor_fuel" });
	event.remove({ output: /.*heat_sink/ });

	event.shaped("4x nuclearcraft:plate_basic", ["xyx", "yoy", "xyx"], {
		x: "createdeco:iron_sheet_metal",
		y: "thermal:lead_plate",
		o: "nuclearcraft:graphite_block",
	});

	event.shaped("nuclearcraft:plate_advanced", ["xyx", "yoy", "xyx"], {
		x: "thermal:signalum_dust",
		y: "nuclearcraft:tough_alloy",
		o: "nuclearcraft:plate_basic",
	});

	event.shaped("nuclearcraft:plate_du", ["xyx", "yoy", "xyx"], {
		x: "thermal:sulfur_dust",
		y: "mekanism:ingot_uranium",
		o: "nuclearcraft:plate_advanced",
	});

	event.shaped("nuclearcraft:plate_elite", ["xyx", "yoy", "xyx"], {
		x: "nuclearcraft:crystal_binder_dust",
		y: "enderio:dark_steel_ingot",
		o: "nuclearcraft:plate_du",
	});
});
