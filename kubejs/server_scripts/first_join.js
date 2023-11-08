PlayerEvents.loggedIn((e) => {
    // Give player a quest book
    if(e.player.stages.has("has_quest_book")) return;

    e.player.stages.add("has_quest_book");
    e.player.give("heracles:quest_book");
});

