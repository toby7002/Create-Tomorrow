"use strict";
ServerEvents.recipes(function (event) {
    getMekanism()
        .concat(getCreateNewAge(), getCreateAddition(), getTwilightForest(), CreateTheFactoryMustGrowRecipes(), AdAstra())
        .forEach(function (item) {
        event.remove({ output: item });
    });
    event.remove({ type: "tfmg:casting" });
});
function getMekanism() {
    var materials = [
        "refined_obsidian",
        "refined_glowstone",
        "bronze",
        "lapis_lazuli",
        "osmium",
        "steel",
    ];
    function getMekanismItems() {
        return [
            "qio_drive_array",
            "qio_dashboard",
            "qio_exporter",
            "qio_importer",
            "qio_redstone_adapter",
            "portable_qio_dashboard",
            "qio_drive_base",
            "qio_drive_hyper_dense",
            "qio_drive_time_dilating",
            "qio_drive_supermassive",
            "scuba_mask",
            "scuba_tank",
        ].map(function (item) { return "mekanism:".concat(item); });
    }
    function getMekanismTools() {
        var types = [
            "swords",
            "pickaxes",
            "hoes",
            "axes",
            "shovels",
        ];
        return materials
            .map(function (material) { return types.map(function (type) { return "tools/".concat(type, "/").concat(material); }); })
            .reduce(function (prev, curr) { return prev.concat(curr); }, [])
            .map(function (item) { return "#forge:".concat(item); });
    }
    function getMekanismArmors() {
        var types = ["helmets", "chestplates", "leggings", "boots"];
        return materials
            .map(function (material) {
            return types.map(function (type) { return "armors/".concat(type, "/").concat(material); });
        })
            .reduce(function (prev, curr) { return prev.concat(curr); }, [])
            .map(function (item) { return "#forge:".concat(item); });
    }
    return getMekanismItems().concat(getMekanismTools(), getMekanismArmors());
}
function getCreateNewAge() {
    function getCreateNewAgeItems() {
        return [
            "energiser_t1",
            "energiser_t2",
            "energiser_t3",
            "carbon_brushes",
            "generator_coil",
            "magnetite_block",
            "redstone_magnet",
            "layered_magnet",
            "fluxuated_magnetite",
            "netherite_magnet",
        ].map(function (item) { return "create_new_age:".concat(item); });
    }
    return getCreateNewAgeItems();
}
function getCreateAddition() {
    function getCreateAdditionItems() {
        return [
            "electric_motor",
            "connector",
            "large_connector",
            "small_light_connector",
            "spool",
            "copper_spool",
            "gold_spool",
            "electrum_spool",
            "festive_spool",
        ].map(function (item) { return "createaddition:".concat(item); });
    }
    return getCreateAdditionItems();
}
function getTwilightForest() {
    function getTwilightForestItems() {
        return ["uncrafting_table"].map(function (item) { return "twilightforest:".concat(item); });
    }
    return getTwilightForestItems();
}
function CreateTheFactoryMustGrowRecipes() {
    function Recipes() {
        return [
            "molten_steel_bucket",
            "fireclay",
            "fireclay_ball",
            "fireproof_brick",
            "fireproof_bricks",
            "fireproof_brick_reinforcement",
            "blast_furnace_output",
            "block_mold",
            "ingot_mold",
            "casting_basin",
            "casting_spout",
            "slag",
            "blasting_mixture",
        ].map(function (item) { return "tfmg:".concat(item); });
    }
    return Recipes();
}
function AdAstra() {
    function Items() {
        return [
            "coal_generator",
            "compressor",
            "etrionic_blast_furnace",
            "solar_panel",
            "water_pump",
            "energizer",
        ].map(function (item) { return "ad_astra:".concat(item); });
    }
    return Items();
}
ServerEvents.recipes(function (event) {
    // Remove
    ["chest", "stick", "furnace"].forEach(function (recipe) {
        event.remove({
            output: "minecraft:".concat(recipe),
            mod: "minecraft",
        });
    });
    ["metallurgic_infuser"].forEach(function (recipe) {
        event.remove({
            output: "mekanism:".concat(recipe),
            mod: "mekanism",
        });
    });
    // Add
    // Chest
    event.shaped("2x chest", ["XYX", "YZY", "XYX"], {
        X: "#minecraft:logs",
        Y: "#minecraft:planks",
        Z: "minecraft:stone_button",
    });
    event.shaped("chest", ["XYX", "YZY", "XYX"], {
        X: "#minecraft:logs",
        Y: "minecraft:stick",
        Z: "minecraft:stone_button",
    });
    // Stick
    event.shaped("2x stick", ["X", "X"], {
        X: "#minecraft:planks",
    });
    event.shaped("8x stick", ["X", "X"], {
        X: "#minecraft:logs",
    });
    // Furnace
    event.shaped("furnace", ["XYX", "ZOZ", "XYX"], {
        X: "compressedblocks:c0_cobblestone",
        Y: "#forge:cobblestone",
        Z: "minecraft:raw_copper",
        O: "#minecraft:coals",
    });
    // Mekanism Infuser
    event.shaped("mekanism:metallurgic_infuser", ["XOX", "ZAZ", "YOY"], {
        X: "create:brass_block",
        Z: "minecraft:blast_furnace",
        Y: "minecraft:netherite_block",
        O: "mekanism:block_osmium",
        A: "create:refined_radiance",
    });
});
