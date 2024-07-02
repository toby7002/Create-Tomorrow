// priority: 0

StartupEvents.registry("block", (event) => {
  event
    .create("compressed_cobblestone")
    .displayName("Compressed Cobblestone")
    .material("stone")
    .hardness(5)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");
});
