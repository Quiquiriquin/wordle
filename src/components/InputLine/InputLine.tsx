import { Dispatch, SetStateAction, createRef, useEffect, useRef, useState } from 'react'
import SquareInput from '../inputs/SquareInput/SquareInput'

type InputLineProps = {
  word: string
  row: number
  activeLine: number
  setActiveLine: Dispatch<SetStateAction<number>>
}

const InputLine = ({ activeLine, row, word = '' }: InputLineProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRefs = useRef<any>([])
  const [checklist, setCheckList] = useState<number[]>([0, 0, 0, 0, 0])
  const numberOfInputs = [0, 1, 2, 3, 4]
  inputRefs.current = [0, 0, 0, 0, 0].map((ref, index) => (inputRefs.current[index] = createRef()))
  const moveToTheNext = (index: number) => {
    if (index < 4) {
      inputRefs.current[index + 1 || index].current?.focus()
    }
  }
  const verify = (): boolean => checklist.reduce((prev, curr) => prev + curr, 0) === 5

  useEffect(() => {
    if (verify()) {
      console.log('Ya esta bien la palabra')
    } else {
      console.log('Aún no está bien')
    }
  }, [checklist])
  return (
    <div key={row} className='flex gap-4'>
      {numberOfInputs.map((inputPosition) => (
        <SquareInput
          updateCheckList={setCheckList}
          moveNextInput={moveToTheNext}
          ref={inputRefs.current[inputPosition]}
          key={`${inputPosition}_${activeLine}`}
          disabled={activeLine !== row}
          expectedLetter={word.charAt(inputPosition)}
          word={word || ''}
          position={inputPosition}
        />
      ))}
    </div>
  )
}

export default InputLine
