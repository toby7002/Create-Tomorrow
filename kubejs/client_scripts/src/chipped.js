REIEvents.groupEntries((event) => {
  event.groupItems("kubejs:rei_groups/chipped", "Chipped", [
    Ingredient.of("@chipped")
      .getItemIds()
      .filter(
        (item) =>
          item !== "chipped:mason_table" &&
          item !== "chipped:botanist_workbench" &&
          item !== "chipped:loom_table" &&
          item !== "chipped:glassblower" &&
          item !== "chipped:alchemy_bench" &&
          item !== "chipped:tinkering_table" &&
          item !== "chipped:carpenters_table" &&
          item !== "chipped:mechanist_workbench"
      ),
  ]);

  event.groupItems("kubejs:rei_groups/rechiseled", "Rechiseled", [
    Ingredient.of("@rechiseled")
      .getItemIds()
      .filter((item) => item !== "rechiseled:chisel"),
  ]);
});
