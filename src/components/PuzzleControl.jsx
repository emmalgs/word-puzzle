import React from "react";
import { words } from "./words";
import GuessWordForm from "./GuessWordForm";

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
    const newGameWord = words[Math.floor(Math.random() * words.length)]
    this.setState({
      formVisibleOnPage: true,
      gameEnd: false,
      guessesLeft: 6,
      word: newGameWord});
    console.log(this.state.word)
  }

  handleGuess = (letter) => {
    if (this.state.guessesLeft > 1) {
      const addLetter = this.state.lettersGuessed.concat(letter);
      const updateGuesses = this.state.guessesLeft - 1;
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

  render(){
    let currentlyVisibleState = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <GuessWordForm 
        guessLetter={this.handleGuess} />
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
        <p>Guesses Left: {this.state.guessesLeft}</p>
        {currentlyVisibleState}
      </div>
    )
  }
}

export default PuzzleControl;