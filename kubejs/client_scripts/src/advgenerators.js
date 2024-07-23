REIEvents.hide("item", (event) => {
	// Remove items
	["controller"].forEach((item) => {
		event.hide(`advgenerators:${item}`);
	});
});
