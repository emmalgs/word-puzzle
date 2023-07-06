const initialState = {
  guesses: 6
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WRONG_GUESS':
      return {
        ...state,
        guesses: state.guesses - 1
      };
    case 'START_GAME':
      return initialState;
    default:
      return state;
  }
}

export default reducer;