StartupEvents.registry("item", (e) => {
	[
		"black_glass_lens",
		"blue_glass_lens",
		"brown_glass_lens",
		"cyan_glass_lens",
		"gray_glass_lens",
		"green_glass_lens",
		"light_blue_glass_lens",
		"light_gray_glass_lens",
		"lime_glass_lens",
		"magenta_glass_lens",
		"orange_glass_lens",
		"pink_glass_lens",
		"purple_glass_lens",
		"red_glass_lens",
		"yellow_glass_lens",
	].forEach((name) => {
		e.create(`${name}`)
			.displayName(name.split("_").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" "))
			.texture(`kubejs:item/greg/lens/${name}`);
	});

	e.create("glass_lens")
		.displayName("Glass Lens")
		.texture("kubejs:item/greg/lens/lens");
});
