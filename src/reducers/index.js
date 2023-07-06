import { combineReducers } from "redux";
import lettersGuessedReducer from './guess-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import gameEndReducer from './game-end-reducer';

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    lettersGuessed: lettersGuessedReducer,
    gameEnd: gameEndReducer
});

export default rootReducer;