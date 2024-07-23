ServerEvents.recipes((event) => {
	[
		"thermal:machine_frame",
		"rftoolsbase:machine_frame",
		"enderio:void_chassis",
		"mekanism:steel_casing",
	].forEach((item) => {
		event.remove({ output: `${item}` });
	});

	// machine frame thermal
	event.shaped("2x thermal:machine_frame", ["xyx", "abc", "xzx"], {
		x: "create_new_age:overcharged_iron",
		y: "rftoolsbase:machine_frame",
		a: "tfmg:heavy_machinery_casing",
		b: "nuclearcraft:empty_frame",
		c: "mekanism:steel_casing",
		z: "thermal:fluid_cell_frame",
	});
	// machine frame rf
	event.shaped("2x rftoolsbase:machine_frame", ["xyx", "aba", "zoz"], {
		x: "advgenerators:turbine_rotor_tier1",
		y: "thermal:gold_gear",
		a: "kubejs:rubber_plate",
		b: "tfmg:steel_casing",
		z: "industrialforegoing:pink_slime",
		o: "create:electron_tube",
	});
	// void chassis
	event.shaped("enderio:void_chassis", ["xyx", "aba", "xyx"], {
		x: "thermal:enderium_plate",
		y: "enderio:dark_bimetal_gear",
		a: "enderio:dark_steel_bars",
		b: "thermal:machine_frame",
	});
	// soul chassis
	event.forEachRecipe({ output: "enderio:ensouled_chassis" }, (recipe) => {
		event.replaceInput(
			{ id: recipe.getOrCreateId() },
			"quartz",
			"enderio:void_chassis"
		);
	});
	// steel casing
	event.shaped("2x mekanism:steel_casing", ["xyx", "aba", "xyx"], {
		x: "mekanism:ingot_osmium",
		y: "mekanism:block_osmium",
		a: "ad_astra:steel_plate",
		b: "tfmg:heavy_machinery_casing",
	});
});
