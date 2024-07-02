REIEvents.groupEntries((event) => {
  event.groupItems("kubejs:rei_groups/rechiseled", "Rechiseled", [
    Ingredient.of("@rechiseled")
      .getItemIds()
      .filter((item) => item !== "rechiseled:chisel"),
  ]);
});
