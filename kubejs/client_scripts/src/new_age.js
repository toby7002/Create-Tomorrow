REIEvents.hide("item", (event) => {
	// Remove items
	[
		"heat_pipe",
		"heat_pump",
		"heater",
		"stirling_engine",
		"solid_corium",
		"corium",
		"reactor_casing",
		"reactor_rod",
		"reactor_glass",
		"reactor_fuel_acceptor",
		"reactor_heat_vent",
		"basic_solar_heating_plate",
		"advanced_solar_heating_plate",
		"nuclear_fuel",
		"incomplete_fuel",
		"incomplete_casing",
		"incomplete_wire",
		"incomplete_enchanted_golden_apple",
	].forEach((item) => {
		event.hide(`create_new_age:${item}`);
	});
});
