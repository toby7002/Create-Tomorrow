REIEvents.hide("item", (event) => {
  [
    "plastic_pipe",
    "plastic_mechanical_pump",
    "plastic_smart_fluid_pipe",
    "plastic_fluid_valve",
  ].forEach((v) => {
    event.hide(`tfmg:${v}`);
  });
});
