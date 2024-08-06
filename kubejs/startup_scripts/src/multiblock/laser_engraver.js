MMEvents.registerControllers(event => {
    event.create("laser_engraver_controller")
        .name("Laser Engraver")
        .type("mm:machine");
});