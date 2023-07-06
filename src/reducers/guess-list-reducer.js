const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GUESS':
            return [...state]
        default:
            return state;
    }
};

export default reducer