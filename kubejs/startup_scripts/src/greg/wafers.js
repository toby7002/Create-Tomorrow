StartupEvents.registry("item", (e) => {
	const capitalizeWords = (str) => {
		return str
			.split(/[_\s]+/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	const wafer = (name) => {
		e.create(name)
			.displayName(capitalizeWords(name))
			.texture(`kubejs:item/greg/wafers/${name}`);
	};

	[
		"advanced_soc_wafer",
		"calorite_wafer",
		"cpu_wafer",
		"desh_wafer",
		"highly_advanced_soc_wafer",
		"hpic_wafer",
		"ilc_wafer",
		"lpic_wafer",
		"mpic_wafer",
		"nand_memory_wafer",
		"nano_cpu_wafer",
		"nor_memory_wafer",
		"ostrum_wafer",
		"qbit_cpu_wafer",
		"ram_wafer",
		"silicon_wafer",
		"simple_soc_wafer",
		"soc_wafer",
		"uhpic_wafer",
		"ulpic_wafer",
	].forEach((item) => {
		wafer(item);
	});
});
