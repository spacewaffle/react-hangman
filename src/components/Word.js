import React from 'react'

const Word = ({ selectedWord, correctLetters}) => {

  return (
    <div>
      <h2>Word</h2>
      { selectedWord.split('').map( (letter, i) => (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
          )
        )
      }
    </div>
  )
}

export default Word