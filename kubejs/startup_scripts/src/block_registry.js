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

  event
    .create("double_compressed_cobblestone")
    .displayName("Double Compressed Cobblestone")
    .material("stone")
    .hardness(12)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");

  event
    .create("triple_compressed_cobblestone")
    .displayName("Triple Compressed Cobblestone")
    .material("stone")
    .hardness(31)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");

  event
    .create("quadruple_compressed_cobblestone")
    .displayName("Quadruple Compressed Cobblestone")
    .material("stone")
    .hardness(78)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");

  event
    .create("quintuple_compressed_cobblestone")
    .displayName("Quintuple Compressed Cobblestone")
    .material("stone")
    .hardness(195)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");

  event
    .create("sextuple_compressed_cobblestone")
    .displayName("Sextuple Compressed Cobblestone")
    .material("stone")
    .hardness(488)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");

  event
    .create("septuple_compressed_cobblestone")
    .displayName("Septuple Compressed Cobblestone")
    .material("stone")
    .hardness(1220)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");

  event
    .create("octuple_compressed_cobblestone")
    .displayName("Octuple Compressed Cobblestone")
    .material("stone")
    .hardness(3051)
    .resistance(30)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");
});
