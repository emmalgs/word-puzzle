import PropTypes from "prop-types";
import { v4 } from 'uuid';

function GuessResult(props) {
  const wordArray = props.word.split("");

  return (
    <div>
      <div className="guess-result">{(props.result) ? <p>Correct!</p> : <p>Wrong!</p>}</div>
      <div className="word-guess-display">
        {wordArray.map((letter) => {
          let id = v4();
          return (!props.allGuesses.includes(letter)) ? 
          (letter === " ") ? <span key={id}> </span> :
          <span key={id}>__</span> :
          <span key={id}>{letter}</span>
          })
        }
      </div>
      <div className="guesses-left">Guesses Left: {props.guesses}</div>
    </div>
  )
}

GuessResult.propTypes = {
  guesses: PropTypes.number,
  result: PropTypes.bool,
  word: PropTypes.string,
  allGuesses: PropTypes.array
}

export default GuessResult;