REIEvents.hide("fluid", (event) => {
	CreateTheFactoryMustGrowFluids().forEach((fluid) => {
		event.hide(fluid);
	});
});

function CreateTheFactoryMustGrowFluids() {
	function Fluids() {
		return ["molten_slag", "molten_steel"].map((fluid) => `tfmg:${fluid}`);
	}

	return Fluids();
}
