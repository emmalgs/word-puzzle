import PropTypes from "prop-types";

function GuessResult(props) {
  const wordArray = props.word.split("");

  return (
    <div>
      <div className="guess-result">{(props.result) ? <p>Correct!</p> : <p>Wrong!</p>}</div>
      <div className="word-guess-display">
        {wordArray.map((letter) => {
          return props.allGuesses.includes(letter) ? 
          <span>{letter}</span> :
          <span>__</span>})
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