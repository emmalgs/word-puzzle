const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GUESS':
            return [...state, action.letter];
        case 'CLEAR_GUESSES':
            return [];
        default:
            return state;
    }
};

export default reducer