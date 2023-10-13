import React, { useContext, useId, useState } from 'react'
import './_main.scss'
import SquareInput from '../../components/inputs/SquareInput/SquareInput'
import { ThemeContext } from '../../context/ThemeContext'
import clsx from 'clsx'
import { GeneralContext } from '../../context/GeneralContext'
import InputLine from '../../components/InputLine/InputLine'

const Main = () => {
  const { theme } = useContext(ThemeContext)
  const { words } = useContext(GeneralContext)
  const rows = [0, 1, 2, 3, 4]
  const [activeLine, setActiveLine] = useState<number>(0)
  const [activeColumn, setActiveColumn] = useState<number>(0)
  if (!words) {
    return <div>Error</div>
  }

  return (
    <div className={clsx(theme, 'flex flex-col gap-4')}>
      {rows.map((row) => (
        <InputLine
          activeLine={activeLine}
          setActiveLine={setActiveLine}
          word={words[0]}
          row={row}
          key={row}
        />
      ))}
    </div>
  )
}

export default Main
