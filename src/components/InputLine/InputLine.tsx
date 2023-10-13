import {
  Dispatch,
  SetStateAction,
  createRef,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import SquareInput from '../inputs/SquareInput/SquareInput'

type InputLineProps = {
  word: string
  row: number
  activeLine: number
  setActiveLine: Dispatch<SetStateAction<number>>
}

// eslint-disable-next-line react/display-name
const InputLine = memo(
  ({ activeLine, setActiveLine, row, word = '' }: InputLineProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputRefs = useRef<any>([])
    const [checklist, setCheckList] = useState<number[]>([0, 0, 0, 0, 0])
    const numberOfInputs = [0, 1, 2, 3, 4]
    inputRefs.current = useMemo(
      () => [0, 0, 0, 0, 0].map((ref, index) => (inputRefs.current[index] = createRef())),
      [row],
    )
    const moveToTheNext = (index: number) => {
      if (index < 4) {
        document.getElementById(`input_${row}_${index + 1}`)?.focus()
      }
      if (index === 4) {
        setActiveLine(row + 1)
      }
    }
    const verify = (): boolean => checklist.reduce((prev, curr) => prev + curr, 0) === 5

    useEffect(() => {
      if (verify()) {
        console.log('Ya esta bien la palabra')
      }
    }, [checklist])

    useEffect(() => {
      if (activeLine === row) {
        document.getElementById(`input_${row}_0`)?.focus()
      }
    }, [activeLine])

    return (
      <div id={`row_${row}`} className='flex gap-4'>
        {numberOfInputs.map((_, inputPosition) => (
          <SquareInput
            id={`input_${row}_${inputPosition}`}
            updateCheckList={setCheckList}
            moveNextInput={moveToTheNext}
            ref={inputRefs.current[inputPosition]}
            key={`${inputPosition}_${row}`}
            disabled={activeLine !== row}
            expectedLetter={word.charAt(inputPosition)}
            word={word || ''}
            position={inputPosition}
          />
        ))}
      </div>
    )
  },
  (prev, next) => prev.row !== next.row,
)

export default InputLine
