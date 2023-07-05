import React from "react";
import { words } from "./words";
import GuessWordForm from "./GuessWordForm";
import GuessResult from "./GuessResult";

class PuzzleControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      gameEnd: false,
      lettersGuessed: [],
      guessesLeft: null,
      guessResult: null,
      word: null,
      currentWordWithGuesses: null
    }
  }

  componentDidUpdate() {
    console.log("componenet updated")
  }

  handleStartGameClick = () => {
    const newGameWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    this.setState({
      formVisibleOnPage: true,
      gameEnd: false,
      guessesLeft: 6,
      lettersGuessed: [],
      word: newGameWord});
    console.log(this.state.word)
  }

  handleGuess = (letter) => {
    if (this.state.guessesLeft > 1) {
      const addLetter = this.state.lettersGuessed.concat(letter);
      const updateGuesses = this.state.guessesLeft - 1;
      this.checkGuess(letter);
      this.setState({
        lettersGuessed: addLetter,
        guessesLeft: updateGuesses
      });
    } else {
      this.setState({
        formVisibleOnPage: false,
        gameEnd: true,
        guessesLeft: 0})
    }
  }

  checkGuess = (letter) => {
    const result = (this.state.word.includes(letter)) ? true : false;
    this.setState({guessResult: result});
  }

  render(){
    let currentlyVisibleState = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <div>
        <GuessResult 
          allGuesses={this.state.lettersGuessed}
          word={this.state.word}
          result={this.state.guessResult}
          guesses={this.state.guessesLeft} />
        <GuessWordForm 
          guessLetter={this.handleGuess} />
      </div>
    } else if (this.state.gameEnd) {
      currentlyVisibleState = 
      <div>
        <h1>Out of guesses! Game over!</h1>
        <button onClick={this.handleStartGameClick}>Start again?</button>
      </div>
    }
    return (
      <div>
        <h1>GUESS THE CHEESE</h1>
        <button onClick={this.handleStartGameClick}>Start New Game</button>
        {currentlyVisibleState}
      </div>
    )
  }
}

export default PuzzleControl;