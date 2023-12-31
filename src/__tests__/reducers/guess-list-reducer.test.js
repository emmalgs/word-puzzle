import lettersGuessedReducer from '../../reducers/guess-list-reducer';
import { describe, expect, it } from "vitest"

describe("lettersGuessedReducer", () => {

    let action;
    const guessData = 'E';
    const currentData = ['A', 'B', 'C', 'D'];

    it('Should return default state if no action type is recognized', () => {
        expect(lettersGuessedReducer(false, {type: null})).toBe(false);
    });

    it('should successfully add new guess data to lettersGuessed', () => {
        action = {
            type: 'ADD_GUESS',
            letter: guessData
        };

        expect(lettersGuessedReducer([], action)).toEqual(['E'])
    });

    it('should successfully add another guess to array of data', () => {
        action = {
            type: 'ADD_GUESS',
            letter: guessData
        };
        expect(lettersGuessedReducer([...currentData], action)).toEqual([...currentData, guessData])
    });

    it('should successfully clear the array', () => {
        action = {
            type: "CLEAR_GUESSES"
        }
        expect(lettersGuessedReducer(currentData, action)).toEqual([]);
    });
});