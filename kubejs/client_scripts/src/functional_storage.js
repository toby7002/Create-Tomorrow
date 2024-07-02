REIEvents.hide("item", (event) => {
  [
    "gold_upgrade",
    "diamond_upgrade",
    "netherite_upgrade",
    "ender_drawer",
  ].forEach((v) => {
    event.hide(`functionalstorage:${v}`);
  });
});
