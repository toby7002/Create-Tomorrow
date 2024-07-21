ServerEvents.recipes((event) => {
    // Remove generators
    event.remove({
        output: "ad_astra:coal_generator"
    })
})