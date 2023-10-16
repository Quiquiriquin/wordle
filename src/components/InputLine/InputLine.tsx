import React, { Dispatch, SetStateAction } from 'react'
import SquareInput from '../inputs/SquareInput/SquareInput'

type InputLineProps = {
  row: number
  word: string
  col?: number
  setActiveColumn: Dispatch<SetStateAction<number>>
  evaluate: boolean
  reset: boolean
  activeLine: number
}

const InputLine = ({ row, word = '', evaluate, reset, activeLine }: InputLineProps) => {
  const positions = [0, 1, 2, 3, 4]

  return (
    <div className='flex gap-2'>
      <SquareInput
        reset={reset}
        word={word}
        evaluate={evaluate && activeLine - 1 === row}
        expectedLetter={word.charAt(0).toLowerCase()}
        id={`input_${row}_${positions[0]}`}
      />
      <SquareInput
        reset={reset}
        word={word}
        evaluate={evaluate && activeLine - 1 === row}
        expectedLetter={word.charAt(1).toLowerCase()}
        id={`input_${row}_${positions[1]}`}
      />
      <SquareInput
        reset={reset}
        word={word}
        evaluate={evaluate && activeLine - 1 === row}
        expectedLetter={word.charAt(2).toLowerCase()}
        id={`input_${row}_${positions[2]}`}
      />
      <SquareInput
        reset={reset}
        word={word}
        evaluate={evaluate && activeLine - 1 === row}
        expectedLetter={word.charAt(3).toLowerCase()}
        id={`input_${row}_${positions[3]}`}
      />
      <SquareInput
        reset={reset}
        word={word}
        evaluate={evaluate && activeLine - 1 === row}
        expectedLetter={word.charAt(4).toLowerCase()}
        id={`input_${row}_${positions[4]}`}
      />
    </div>
  )
}

export default InputLine
