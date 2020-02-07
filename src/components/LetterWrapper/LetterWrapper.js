import React, {Component, Fragment} from 'react';

class LetterWrapper extends Component {

  render() {
    const { className, text } = this.props;

    const letters = text.split('').map((letter, index) => {

      letter = letter === ' ' ? '\u00A0' : letter;

      return (
        <span className={className} key={index}>
          {letter}
        </span>
      );
    });

    return (
      <Fragment>{letters}</Fragment>
    );
  }
}

export default LetterWrapper;
