const reducer = (state = false, action) => {
  switch (action.type) {
      case "TOGGLE_END":
          return !state;
      default:
          return state;
  }
};

export default reducer;