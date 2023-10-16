import React, { Dispatch, MouseEvent, MouseEventHandler, SetStateAction, useState } from 'react'
import './_keyboard.scss'
import Button from '../Button/Button'
import { KEYBOARD_LINE_1, KEYBOARD_LINE_2, KEYBOARD_LINE_3 } from '../../utils/constants'
import clsx from 'clsx'

const Keyboard = ({
  row,
  col,
  setActiveLine,
  setActiveColumn,
  setEvaluateLine,
}: {
  row: number
  col: number
  setActiveLine: Dispatch<SetStateAction<number>>
  setActiveColumn: Dispatch<SetStateAction<number>>
  setEvaluateLine: Dispatch<SetStateAction<boolean>>
}) => {
  const [currentCol, setCurrentCol] = useState(col)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPressKeycap = (e: any) => {
    const value = e.target.innerText
    setBoxValue(value)
    if (currentCol === 4) {
      setEvaluateLine(true)
      setActiveLine((prev) => prev + 1)
      setCurrentCol(0)
      setTimeout(() => setEvaluateLine(false), 150)
    }
  }

  const setBoxValue = (value: string) => {
    const nextCol = currentCol < 4 ? currentCol + 1 : 0
    const nextRow = currentCol < 4 && row < 4 ? row : row < 4 ? row + 1 : 0
    const currentElement: HTMLInputElement | null = document.getElementById(
      `input_${row}_${currentCol}`,
    ) as HTMLInputElement
    const nextElement: HTMLInputElement | null = document.getElementById(
      `input_${nextRow}_${nextCol}`,
    ) as HTMLInputElement
    if (currentElement) {
      currentElement.value = value
      currentElement.dispatchEvent(new Event('change'))
      nextElement?.focus()
      setCurrentCol((prev) => (prev += 1))
    }
  }

  return (
    <div className='flex flex-col gap-2 keyboard-container bg-gray-3'>
      <div className='flex gap-2 ml-4'>
        {KEYBOARD_LINE_1.map(({ value, cssClass }) => (
          <Button
            key={value}
            onPress={onPressKeycap}
            className={clsx('keyboard', cssClass)}
            label={`${value}`}
          />
        ))}
      </div>
      <div className='flex gap-2 ml-8'>
        {KEYBOARD_LINE_2.map(({ value, cssClass }) => (
          <Button
            key={value}
            onPress={onPressKeycap}
            className={clsx('keyboard', cssClass)}
            label={`${value}`}
          />
        ))}
      </div>
      <div className='flex gap-2'>
        {KEYBOARD_LINE_3.map(({ value, cssClass }) => (
          <Button
            key={value}
            onPress={onPressKeycap}
            className={clsx('keyboard', cssClass)}
            label={`${value}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Keyboard
