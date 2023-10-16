import React, { Dispatch, SetStateAction, useEffect } from 'react'
import SquareInput from '../inputs/SquareInput/SquareInput'

type InputLineProps = {
  row: number
  word: string
  col: number
  setActiveColumn: Dispatch<SetStateAction<number>>
  evaluate: boolean
}

const InputLine = ({ row, word = '', col, evaluate }: InputLineProps) => {
  const positions = [0, 1, 2, 3, 4]
  useEffect(() => {
    if (col > 4) {
      console.log('Ya acabamos')
    }
  }, [col])
  return (
    <div className='flex gap-2'>
      <SquareInput
        word={word}
        evaluate={evaluate}
        expectedLetter={word.charAt(0).toLowerCase()}
        id={`input_${row}_${positions[0]}`}
      />
      <SquareInput
        word={word}
        evaluate={evaluate}
        expectedLetter={word.charAt(1).toLowerCase()}
        id={`input_${row}_${positions[1]}`}
      />
      <SquareInput
        word={word}
        evaluate={evaluate}
        expectedLetter={word.charAt(2).toLowerCase()}
        id={`input_${row}_${positions[2]}`}
      />
      <SquareInput
        word={word}
        evaluate={evaluate}
        expectedLetter={word.charAt(3).toLowerCase()}
        id={`input_${row}_${positions[3]}`}
      />
      <SquareInput
        word={word}
        evaluate={evaluate}
        expectedLetter={word.charAt(4).toLowerCase()}
        id={`input_${row}_${positions[4]}`}
      />
    </div>
  )
}

export default InputLine
