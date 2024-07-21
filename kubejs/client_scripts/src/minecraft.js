REIEvents.groupEntries((event) => {
	event.groupItems("kubejs:rei_groups/boats", "Boats", [
		Ingredient.of("#minecraft:boats").getItemIds(),
	]);
	event.groupItems("kubejs:rei_groups/beds", "Beds", [
		Ingredient.of("#minecraft:beds").getItemIds(),
	]);
	event.groupItems("kubejs:rei_groups/trim_templates", "Trim Templates", [
		Ingredient.of("#minecraft:trim_templates").getItemIds(),
	]);
	event.groupItems(
		"kubejs:rei_groups/decorated_pot_sherds",
		"Decorated Pot Sherds",
		[Ingredient.of("#minecraft:decorated_pot_sherds").getItemIds()]
	);
	event.groupItems("kubejs:rei_groups/banners", "Banners", [
		Ingredient.of("#minecraft:banners").getItemIds(),
	]);
	event.groupItems("kubejs:rei_groups/candles", "Candles", [
		Ingredient.of("#minecraft:candles").getItemIds(),
	]);
	event.groupItems("kubejs:rei_groups/cards", "Cards", [
		Ingredient.of("#numismatics:id_cards").getItemIds(),
		Ingredient.of("#numismatics:cards").getItemIds(),
	]);
	event.groupItems("kubejs:rei_groups/glasses", "Glasses", [
		Ingredient.of("#enderio:clear_glass").getItemIds(),
		Ingredient.of("#enderio:fused_quartz").getItemIds(),

		Ingredient.of("#enderio:clear_glass_d").getItemIds(),
		Ingredient.of("#enderio:clear_glass_e").getItemIds(),
		Ingredient.of("#enderio:clear_glass_p").getItemIds(),
		Ingredient.of("#enderio:clear_glass_m").getItemIds(),
		Ingredient.of("#enderio:clear_glass_np").getItemIds(),
		Ingredient.of("#enderio:clear_glass_nm").getItemIds(),
		Ingredient.of("#enderio:clear_glass_a").getItemIds(),
		Ingredient.of("#enderio:clear_glass_dp").getItemIds(),
		Ingredient.of("#enderio:clear_glass_dm").getItemIds(),
		Ingredient.of("#enderio:clear_glass_dnm").getItemIds(),
		Ingredient.of("#enderio:clear_glass_ep").getItemIds(),
		Ingredient.of("#enderio:clear_glass_ea").getItemIds(),
		Ingredient.of("#enderio:clear_glass_enm").getItemIds(),
		Ingredient.of("#enderio:clear_glass_dna").getItemIds(),
		Ingredient.of("#enderio:clear_glass_dnp").getItemIds(),
		Ingredient.of("#enderio:clear_glass_na").getItemIds(),
		Ingredient.of("#enderio:clear_glass_da").getItemIds(),
		Ingredient.of("#enderio:clear_glass_enp").getItemIds(),
		Ingredient.of("#enderio:clear_glass_ena").getItemIds(),
		Ingredient.of("#enderio:clear_glass_em").getItemIds(),

		Ingredient.of("#enderio:fused_quartz_d").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_e").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_p").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_m").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_np").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_nm").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_a").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_dp").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_dm").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_dnm").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_ep").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_ea").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_enm").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_dna").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_dnp").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_na").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_da").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_enp").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_em").getItemIds(),
		Ingredient.of("#enderio:fused_quartz_ena").getItemIds(),
	]);
});
