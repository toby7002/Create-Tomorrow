MMEvents.registerPorts((event) => {
	event
		.create("item_bus")
		.name("Item Bus")
		.controllerId("mm:laser_engraver")
		.controllerId("mm:circuit_assembler")
		.config("mm:item", (c) => {
			c.rows(3).columns(3);
		});

	event
		.create("fluid_hatch")
		.name("Fluid Hatch")
		.controllerId("mm:circuit_assembler")
		.config("mm:fluid", (c) => {
			c.slotCapacity(10000).rows(1).columns(1);
		});

	event
		.create("energy_hatch")
		.name("Energy Hatch")
		.controllerId("mm:circuit_assembler")
		.controllerId("mm:laser_engraver")
		.config("mm:energy", (c) => {
			c.capacity(100000).maxReceive(10000).maxReceive(10000);
		});
});
