import * as actions from './../../actions'
import * as c from './../../actions/ActionTypes'
import { describe, expect, it } from "vitest"

describe('Wordle puzzle actions', () => {
  it('endGame should create TOGGLE_END action', () => {
    expect(actions.endGame()).toEqual({
      type: c.TOGGLE_END
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('correctTurn should create correcTurn action', () => {
    expect(actions.correctTurn()).toEqual({
      type: c.CORRECT
    });
  });

  it('wrongTurn should create wrongTurn action', () => {
    expect(actions.wrongTurn()).toEqual({
      type: c.WRONG
    });
  });

  it('addLetter should create addLetter action', () => {
    expect(actions.addLetter('E')).toEqual({
      type: c.ADD_GUESS,
      letter: 'E'
    });
  });

  it('clearGuesses should create clearGuess action', () => {
    expect(actions.clearGuesses()).toEqual({
      type: c.CLEAR_GUESSES
    });
  });

  it('setWord should create SET_WORD action', () => {
    expect(actions.setWord('cheese')).toEqual({
      type: c.SET_WORD,
      word: 'cheese'
    });
  });

  it('startGame should create START_GAME action', () => {
    expect(actions.startGame()).toEqual({
      type: c.START_GAME
    })
  })
});