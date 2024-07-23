ServerEvents.recipes((event) => {
	[
		"andesite_sheet_metal",
		"brass_sheet_metal",
		"copper_sheet_metal",
		"iron_sheet_metal",
		"zinc_sheet_metal",
		"industrial_iron_sheet_metal",
	].forEach((item) => {
		event.remove({ output: `createdeco:${item}` });
	});

	const sheet_metal = (output, input) => {
		event.shaped(`createdeco:${output}`, ["xyx", "yxy", "xyx"], {
			x: "air",
			y: input,
		});
	};

	sheet_metal("andesite_sheet_metal", "createdeco:andesite_sheet");
	sheet_metal("brass_sheet_metal", "create:brass_sheet");
	sheet_metal("iron_sheet_metal", "thermal:iron_plate");
	sheet_metal("copper_sheet_metal", "thermal:copper_plate");
	sheet_metal("zinc_sheet_metal", "createdeco:zinc_sheet");
	sheet_metal(
		"industrial_iron_sheet_metal",
		"createdeco:industrial_iron_sheet"
	);
});
