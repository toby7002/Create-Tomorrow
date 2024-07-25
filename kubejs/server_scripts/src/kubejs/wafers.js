ServerEvents.recipes((event) => {
	event.recipes.create.cutting(
		"16x kubejs:silicon_wafer",
		"kubejs:silicon_boule"
	);
	event.recipes.create.cutting("32x kubejs:desh_wafer", "kubejs:desh_boule");
	event.recipes.create.cutting(
		"64x kubejs:ostrum_wafer",
		"kubejs:ostrum_boule"
	);
	event.recipes.create.cutting(
		["64x kubejs:calorite_wafer", "32x kubejs:calorite_wafer"],
		"kubejs:calorite_boule"
	);

	// Cutting wafer to chip
	const wafer2chip = (name, count) => {
		event.recipes.create.cutting(
			[`${count}x kubejs:${name}_chip`],
			`kubejs:${name}_wafer`
		);
	};
	const items = {
		hpic: 2,
		uhpic: 2,
		qbit_cpu: 4,
		lpic: 4,
		mpic: 4,
		simple_soc: 6,
		soc: 6,
		advanced_soc: 6,
		high_advanced_soc: 6,
		ulpic: 6,
		cpu: 8,
		ilc: 8,
		nano_cpu: 8,
		nor_memory: 16,
		ram: 32,
		nand_memory: 32,
	};

	for (const item in items) {
		if (items.hasOwnProperty(item)) {
			wafer2chip(item, items[item]);
		}
	}
});
