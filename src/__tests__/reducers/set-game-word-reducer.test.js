import setGameWordReducer from '../../reducers/set-game-word-reducer';
import { describe, expect, it } from "vitest";

describe("setGameWordReducer", () => {

  let action;

  it('should return default state if no action is recognized', () => {
    expect(setGameWordReducer({}, { type: null })).toEqual({})
  });

  it('should set the word passed as state when action SET_WORD is called', () => {
    action = {
      type: 'SET_WORD'
    }
    expect(setGameWordReducer('cheese', action)).toEqual('cheese')
  });
});