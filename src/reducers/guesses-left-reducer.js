const reducer = (state = 6, action) => {
  switch (action.type) {
    case 'WRONG_GUESS':
      return state - 1;
    case 'START_GAME':
      return 6;
    case 'END_GAME':
      return 0;
    default:
      return state;
  }
}

export default reducer;