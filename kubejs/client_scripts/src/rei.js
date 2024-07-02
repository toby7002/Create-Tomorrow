REIEvents.hide("item", (event) => {
  [
    "enderio:stirling_generator",
    "enderio:me_conduit",
    "enderio:dense_me_conduit",
  ].forEach((item) => {
    event.hide(item);
  });
});
