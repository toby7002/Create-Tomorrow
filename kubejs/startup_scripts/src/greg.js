StartupEvents.registry("item", (e) => {
	const processor = (name, tooltip) => {
		e.create(`${name}_processor`).tooltip(tooltip);
	};
	const soc = (name, tooltip) => {
		e.create(`${name}_soc`).tooltip(tooltip);
	};
	const computer = (name, tooltip) => {
		e.create(`${name}_computer`).tooltip(tooltip);
	};
	const core = (name, tooltip) => {
		e.create(`${name}_core`).tooltip(tooltip);
	};

	[
		["basic", "§7LV Tier"],
		["advanced", "§bMV Tier"],
		["elite", "§eHV Tier"],
		["ultimate", "§5EV Tier"],
		["quantum", "§fIV Tier"],
	].forEach((tier) => {
		processor(tier[0], tier[1]);
		soc(tier[0], tier[1]);
		computer(tier[0], tier[1]);
		core(tier[0], tier[1]);
	});
});
