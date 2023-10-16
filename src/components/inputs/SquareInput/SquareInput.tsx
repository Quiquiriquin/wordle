import React, { useEffect, useRef, useState } from 'react'
import './_square_input.scss'
import clsx from 'clsx'
type SquareInputProps = {
  id: string
  expectedLetter: string
  evaluate?: boolean
  word: string
  fixedValue?: string
  skipGray?: boolean
  reset?: boolean
}
const SquareInput = ({
  id,
  expectedLetter,
  evaluate = false,
  word,
  fixedValue,
  skipGray = false,
  reset,
}: SquareInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef: any = useRef(null)
  const [validation, setValidation] = useState<string>('')
  const verifyLetter = () => {
    const value = (inputRef?.current?.value || fixedValue || '').toLowerCase()
    if (value) {
      if (value === expectedLetter) {
        setValidation('bg-green-1')
      } else if (
        (value !== expectedLetter || value === expectedLetter) &&
        word.toLowerCase().includes(value)
      ) {
        setValidation('bg-yellow-1')
      } else if (!skipGray) {
        setValidation('bg-gray-2')
      }
    }
  }

  useEffect(() => {
    if (evaluate || fixedValue) {
      verifyLetter()
    }
  }, [evaluate, fixedValue])

  useEffect(() => {
    if (reset) {
      inputRef.current.value = ''
      setValidation('')
    }
  }, [reset])
  return (
    <input
      ref={inputRef}
      id={id}
      readOnly
      className={clsx('square-input', validation, 'color-black')}
      {...(fixedValue ? { value: fixedValue } : {})}
    ></input>
  )
}

export default SquareInput
