ServerEvents.recipes((event) => {
  // Vanilla
  ["iron", "gold", "copper"].forEach((material) => {
    [
      "helmet",
      "chestplate",
      "leggings",
      "boots",
      "sword",
      "pickaxe",
      "axe",
      "shovel",
      "hoe",
    ].forEach((type) => {
      event.replaceInput(
        {
          input: `${material}_ingot`,
          output:
            material === "copper"
              ? `create_sa:${material}_${type}`
              : material === "gold"
              ? `${material}en_${type}`
              : `${material}_${type}`,
        },
        `${material}_ingot`,
        `#forge:plates/${material}`
      );
    });
  });
  // Create
  ["zinc", "brass"].forEach((material) => {
    [
      "helmet",
      "chestplate",
      "leggings",
      "boots",
      "sword",
      "pickaxe",
      "axe",
      "shovel",
      "hoe",
    ].forEach((type) => {
      event.replaceInput(
        {
          input: `create:${material}_ingot`,
          output: `create_sa:${material}_${type}`,
        },
        `create:${material}_ingot`,
        `#forge:plates/${material}`
      );
    });
  });
});
