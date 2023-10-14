import React, { useEffect, useRef, useState } from 'react'
import './_square_input.scss'
import clsx from 'clsx'
type SquareInputProps = {
  id: string
  expectedLetter: string
  evaluate?: boolean
  word: string
}
const SquareInput = ({ id, expectedLetter, evaluate = false, word }: SquareInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef: any = useRef(null)
  const [validation, setValidation] = useState<string>('')
  const verifyLetter = () => {
    const value = (inputRef?.current?.value || '').toLowerCase()
    if (value) {
      if (value === expectedLetter) {
        setValidation('bg-green-1')
      }
      if (value !== expectedLetter && word.includes(value)) {
        setValidation('bg-yellow-1')
      }
    }
  }

  useEffect(() => {
    if (evaluate) {
      verifyLetter()
    }
  }, [evaluate])
  return (
    <input
      ref={inputRef}
      id={id}
      readOnly
      className={clsx('square-input', validation, 'color-black')}
    ></input>
  )
}

export default SquareInput
