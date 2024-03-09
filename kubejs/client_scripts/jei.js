// Hide items
JEIEvents.hideItems((event) => {
  ["twilightforest:uncrafting_table"].forEach((item) => {
    event.hide(item);
  });
});
