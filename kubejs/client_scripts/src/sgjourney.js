REIEvents.hide("item", (event) => {
	Ingredient.of("@sgjourney")
		.getItemIds()
		.forEach((item) => {
			event.hide(item);
		});
});

REIEvents.hide("fluid", (event) => {
	Ingredient.of("@sgjourney")
		.getItemIds()
		.forEach((item) => {
			event.hide(item);
		});
});
