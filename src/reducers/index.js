import { combineReducers } from "redux";
import lettersGuessedReducer from './guess-list-reducer';
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    lettersGuessed: lettersGuessedReducer
});

export default rootReducer;