import { combineReducers } from "redux";
import lettersGuessedReducer from './guess-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import gameEndReducer from './game-end-reducer';
import guessesLeftReducer from './guesses-left-reducer';

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    lettersGuessed: lettersGuessedReducer,
    gameEnd: gameEndReducer,
    guessesLeft: guessesLeftReducer
});

export default rootReducer;