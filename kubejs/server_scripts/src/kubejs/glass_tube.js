ServerEvents.recipes((event) => {
	event.shaped("kubejs:glass_tube", ["xxx", "xxx"], {
		x: "#forge:glass_panes",
	});

	event.shaped("kubejs:vacuum_tube", ["zxz", "yyy"], {
		z: "createaddition:iron_rod",
		y: "createaddition:copper_wire",
		x: "kubejs:glass_tube",
	});
});
