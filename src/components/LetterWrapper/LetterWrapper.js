import React from 'react';

const LetterWrapper = ({ className, text }) => {
  const letters = text.split('').map((letter, index) => {
    letter = letter === ' ' ? '\u00A0' : letter;

    return (
      <span className={className} key={index}>
        {letter}
      </span>
    );
  });

  return (
    <>{letters}</>
  );
};

export default LetterWrapper;
