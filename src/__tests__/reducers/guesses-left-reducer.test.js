import guessesLeftReducer from '../../reducers/guesses-left-reducer';
import { describe, expect, it } from "vitest";

describe("guessesLeftReducer", () => {

  let action;

  it('should return default state if no action is passed', () => {
    expect(guessesLeftReducer(false, {type: null})).toEqual(false);
  });

  it('should return 6 when START_GAME action is called', () => {
    action = {
      type: "START_GAME"
    }
    expect(guessesLeftReducer(null, action)).toEqual({ guesses: 6 })
  });

  it('should decrement by one on WRONG_GUESS action type', () => {
    action = {
      type: "WRONG_GUESS"
    }
    let initialState = {
      guesses: 6
    };
    expect(guessesLeftReducer(initialState, action)).toEqual({ guesses: 5 })
  });
});