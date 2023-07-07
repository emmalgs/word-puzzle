import guessBoolCheckReducer from '../../reducers/guess-bool-check-reducer'
import { describe, expect, it } from "vitest"

describe("guessBoolCheckReducer", () => {
  it('should return default state if no action is recognized', () => {
    expect(guessBoolCheckReducer(false, { type: null })).toEqual(false);
  });

  it('should return true if CORRECT action type is passed', () => {
    expect(guessBoolCheckReducer(false, { type: 'CORRECT' })).toEqual(true)
  });

  it('should return false if WRONG action type is passed', () => {
    expect(guessBoolCheckReducer(true, { type: 'WRONG' })).toEqual(false)
  });
});