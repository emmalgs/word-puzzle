const reducer = (state = false, action) => {
  switch (action.type) {
    case 'CORRECT':
      return true;
    case 'WRONG':
      return false;
    default:
      return state;
  }
}

export default reducer;