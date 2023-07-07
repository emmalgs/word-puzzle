const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_WORD':
      return action.word
    default:
      return state;
  }
}

export default reducer;