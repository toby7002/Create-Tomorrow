// priority: 0

const tiers = ["basic", "advanced", "elite", "ultimate"];
const types = [
  "universal_cable",
  "mechanical_pipe",
  "pressurized_tube",
  "logistical_transporter",
  "thermodynamic_conductor",
  "energy_cube"
];

ServerEvents.recipes((event) => {
  tiers.forEach((tier) => {
    types.forEach((type) => {
      event.remove({ output: `mekanism:${tier}_${type}` });
    });
  });

  event.remove({ output: `mekanism:restrictive_transporter` });
  event.remove({output: `mekanism:diversion_transporter`})
});