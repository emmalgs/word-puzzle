import PropTypes from "prop-types";

function GuessWordForm(props) {
  function handleGuessSubmit(event) {
    event.preventDefault();
    props.guessLetter(event.target.letter.value.toUpperCase())
    event.target.letter.value = ""
  }

    return (
    <form onSubmit={handleGuessSubmit}>
      <input type="text" name="letter" maxLength="1" />
      <button type="submit">Guess</button>
    </form>
  )
}

GuessWordForm.propTypes = {
  guessLetter: PropTypes.func
}

export default GuessWordForm;