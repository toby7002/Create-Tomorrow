ServerEvents.recipes((event) => {
	[
		"black_glass_lens",
		"blue_glass_lens",
		"brown_glass_lens",
		"cyan_glass_lens",
		"gray_glass_lens",
		"green_glass_lens",
		"lime_glass_lens",
		"magenta_glass_lens",
		"orange_glass_lens",
		"pink_glass_lens",
		"purple_glass_lens",
		"red_glass_lens",
		"yellow_glass_lens",
		"light_blue_glass_lens",
		"light_gray_glass_lens",
	].forEach((name) => {
		if (
			name == "light_blue_glass_lens" ||
			name == "light_gray_glass_lens"
		) {
			event.shapeless(`kubejs:${name}`, [
				`kubejs:glass_lens`,
				name.split("_")[0] + "_" + name.split("_")[1] + "_dye",
			]);
		} else {
			event.shapeless(`kubejs:${name}`, [
				`kubejs:glass_lens`,
				name.split("_")[0] + "_dye",
			]);
		}
	});

	event.smelting(`kubejs:glass_lens`, "glass_pane");
});
