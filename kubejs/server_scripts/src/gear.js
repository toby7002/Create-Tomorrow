ServerEvents.recipes((event) => {
	const gear = (name) => {
		event.remove({ output: `thermal:${name}_gear` });
		event.shaped(`thermal:${name}_gear`, ["xxx", "xyx", "xxx"], {
			y: `thermal:${name}_ingot`,
			x: `thermal:${name}_plate`,
		});
	};
	[
		"tin",
		"lead",
		"silver",
		"nickel",
		"bronze",
		"invar",
		"electrum",
		"constantan",
		"iron",
		"gold",
		"copper",
		"netherite",
		"signalum",
		"enderium",
		"lumium",
	].forEach((item) => gear(item));

	event.remove({ output: `thermal:lapis_gear` });
	event.remove({ output: `thermal:diamond_gear` });
	event.remove({ output: `thermal:emerald_gear` });
	event.remove({ output: `thermal:quartz_gear` });

	event.shaped(`thermal:lapis_gear`, ["xxx", "xyx", "xxx"], {
		y: `thermal:iron_gear`,
		x: `minecraft:lapis`,
	});
	event.shaped(`thermal:diamond_gear`, ["xxx", "xyx", "xxx"], {
		y: `thermal:iron_gear`,
		x: `minecraft:diamond`,
	});
	event.shaped(`thermal:quartz_gear`, ["xxx", "xyx", "xxx"], {
		y: `thermal:quartz_gear`,
		x: `minecraft:quartz`,
	});
	event.shaped(`thermal:emerald_gear`, ["xxx", "xyx", "xxx"], {
		y: `thermal:iron_gear`,
		x: `minecraft:emerald`,
	});
});
