StartupEvents.registry("item", (e) => {
	const capitalizeWords = (str) => {
		return str
			.split(/[_\s]+/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	const chips = (name) => {
		e.create(name)
			.displayName(capitalizeWords(name))
			.texture(`kubejs:item/greg/chips/${name}`);
	};

	[
		"cpu_chip",
		"hpic_chip",
		"ilc_chip",
		"lpic_chip",
		"mpic_chip",
		"nand_chip",
		"nand_memory_chip",
		"nano_cpu_chip",
		"nor_memory_chip",
		"qbit_cpu_chip",
		"ram_chip",
		"uhpic_chip",
		"ulpic_chip",
	].forEach((item) => {
		chips(item);
	});
});
