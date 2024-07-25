StartupEvents.registry("item", (e) => {
	const capitalizeWords = (str) => {
		return str
			.split(/[_\s]+/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	const foil = (name) => {
		e.create(`${name}_foil`)
			.displayName(capitalizeWords(`${name}_foil`))
			.texture(`kubejs:item/greg/foils/${name}_foil`);
	};

	[
		"silver",
		"copper",
		"desh",
		"ostrum",
		"calorite",
		"gold",
		"signalum",
		"aluminum"
	].forEach((item) => {
		foil(item);
	});
});
