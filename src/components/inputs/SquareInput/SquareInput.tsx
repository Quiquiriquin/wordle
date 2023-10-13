import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react'
import './_square_input.scss'
import { ThemeContext } from '../../../context/ThemeContext'
import clsx from 'clsx'

type SquareInputProps = {
  disabled?: boolean
  expectedLetter: string
  word: string
  position?: number
  moveNextInput?: (e: number) => void
  updateCheckList: Dispatch<SetStateAction<number[]>>
}

// eslint-disable-next-line react/display-name
const SquareInput = forwardRef<HTMLInputElement, SquareInputProps>(
  (
    { disabled = false, expectedLetter, word, moveNextInput, position = 0, updateCheckList },
    ref,
  ) => {
    // const { theme } = useContext(ThemeContext);
    const [value, setValue] = useState<string>('')
    const [validation, setValidation] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(event?.target?.value)
      if (moveNextInput) {
        moveNextInput(position || 0)
      }
    }

    const setValid = (prev: number[]) => {
      const aux = [...prev]
      aux[position] = 1
      return aux
    }

    const setInvalid = (prev: number[]) => {
      const aux = [...prev]
      aux[position] = 0
      return aux
    }

    useEffect(() => {
      if (value) {
        if (value.toLowerCase() === expectedLetter.toLocaleLowerCase()) {
          setValidation('bg-green-1')
          updateCheckList(setValid)
        } else if (
          word.toLowerCase().includes(value) &&
          value.toLocaleLowerCase() !== expectedLetter.toLocaleLowerCase()
        ) {
          setValidation('bg-yellow-1')
          updateCheckList(setInvalid)
        }
      } else {
        setValidation('')
        updateCheckList(setInvalid)
      }
    }, [value])

    return (
      <input
        ref={ref}
        className={clsx('square-input', validation)}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      ></input>
    )
  },
)

export default SquareInput
