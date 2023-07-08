import React from "react";
import { words } from "./words";
import GuessWordForm from "./GuessWordForm";
import GuessResult from "./GuessResult";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import * as a from './../actions';

class PuzzleControl extends React.Component{
  constructor(props) {
    super(props);
  }

  handleStartGameClick = () => {
    const newGameWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;
    const action1 = a.setWord(newGameWord);
    dispatch(action1);

    const action2 = a.startGame();
    dispatch(action2);

    const action3 = a.clearGuesses();
    dispatch(action3);

    const action4 = a.toggleForm();
    dispatch(action4);
  }

  handleGuess = (letter) => {
    if (this.props.guesses >= 1) {
      if (!this.state.lettersGuessed.includes(letter))
      {
        this.checkGuess(letter);
      }
    } else {
      this.setState({
        formVisibleOnPage: false,
        gameEnd: true,
        guessesLeft: 0})
    }
  }

  checkGuess = (letter) => {
    const addLetter = this.state.lettersGuessed.concat(letter);
    const result = (this.state.word.includes(letter)) ? true : false;
    this.setState({
      lettersGuessed: addLetter,
      guessResult: result});
    if (!result) {
      const updateGuesses = this.state.guessesLeft - 1;
      this.setState({
        guessesLeft: updateGuesses
      });
    }
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

PuzzleControl.propTypes = {
  guesses: PropTypes.number,
  word: PropTypes.string,
  lettersGuessed: PropTypes.array
}

const mapStateToProps = state => {
  return {
    guesses: state.guesses,
    word: state.word,
    lettersGuessed: state.lettersGuessed
  }
}

// eslint-disable-next-line no-class-assign
PuzzleControl = connect(mapStateToProps)(PuzzleControl);
export default PuzzleControl;