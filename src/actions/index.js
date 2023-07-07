import * as c from './../actions/ActionTypes';

export const endGame = () => ({
  type: c.TOGGLE_END
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const correctTurn = () => ({
  type: c.CORRECT
});

export const wrongTurn = () => ({
  type: c.WRONG
});

export const addLetter = (letter) => ({
  type: c.ADD_GUESS,
  letter: letter
});

export const clearGuesses = () => ({
  type: c.CLEAR_GUESSES
});

export const setWord = (word) => ({
  type: c.SET_WORD,
  word: word
});

export const startGame = () => ({
  type: c.START_GAME
});