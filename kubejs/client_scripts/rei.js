REIEvents.groupEntries((event) => {
    event.groupItems(
      "kubejs:rei_groups/rechiseledcreate",
      "Rechiseled: Create Blocks",
      [Ingredient.of("@rechiseledcreate").getItemIds()]
    );
    event.groupItems(
      "kubejs:rei_groups/gtceu",
      "GregTech",
      [Ingredient.of("@gtceu").getItemIds()]
    );
  
    event.groupItems("kubejs:rei_groups/rechiseled", "Rechiseled Blocks", [
      Ingredient.of("@rechiseled")
        .getItemIds()
        .filter((item) => item !== "rechiseled:chisel"),
    ]);
    event.groupItems("kubejs:rei_groups/chipped", "Chipped Blocks", [
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
  });
  