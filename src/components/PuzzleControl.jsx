import React from "react";
import { words } from "./words";

class PuzzleControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      guesses: 6,
      guessResult: null,
      word: null,
      currentWordWithGuesses: null
    }
  }
  
  handleStartGameClick = () => {
    const newGameWord = words[Math.floor(Math.random() * words.length)]
    this.setState({
      formVisibleOnPage: true,
      word: newGameWord});
  }

  render(){
    return (
      <div>
        <h1>GUESS THE CHEESE</h1>
        <button onClick={this.handleStartGameClick}>Start New Game</button>
      </div>
    )
  }
}

export default PuzzleControl;