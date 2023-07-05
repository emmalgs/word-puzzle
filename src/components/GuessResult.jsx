import PropTypes from "prop-types";

function GuessResult(props) {

  return (
    <div>
      <div className="guess-result">{(props.result) ? <p>Correct!</p> : <p>Wrong!</p>}</div>
      {/* // correct and missing letters display i.e _ _ E _ X _ _ */}
      <div className="guesses-left">Guesses Left: {props.guesses}</div>
    </div>
  )
}

GuessResult.propTypes = {
  guesses: PropTypes.number,
  result: PropTypes.bool
}

export default GuessResult;