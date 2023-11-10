PlayerEvents.loggedIn((e) => {
	if (e.player.stages.has("not_first_join")) return;

	e.player.stages.add("not_first_join");
	e.player.give("heracles:quest_book");
});
