import React, { useContext, useEffect, useState } from 'react'
import './_main.scss'
import { ThemeContext } from '../../context/ThemeContext'
import clsx from 'clsx'
import { GeneralContext } from '../../context/GeneralContext'
import InputLine from '../../components/InputLine/InputLine'
import Keyboard from '../../components/Keyboard/Keyboard'
import Header from '../../components/Header/Header'

const Main = () => {
  const { theme } = useContext(ThemeContext)
  const { words } = useContext(GeneralContext)
  const rows = [0, 1, 2, 3, 4]
  const [activeLine, setActiveLine] = useState<number>(0)
  const [activeColumn, setActiveColumn] = useState<number>(0)
  const [evaluateLine, setEvaluateLine] = useState<boolean>(false)
  if (!words) {
    return <div>Error</div>
  }

  useEffect(() => {
    document.body.className = theme || ''
  }, [theme])
  return (
    <div className={'main-container'}>
      <Header />
      <div className={clsx(theme, 'flex flex-col gap-2 items-center justify-center')}>
        {rows.map((row) => (
          <InputLine
            col={0}
            evaluate={evaluateLine}
            setActiveColumn={setActiveColumn}
            word={words[0]}
            row={row}
            key={`row_${row}`}
          />
        ))}
      </div>
      <Keyboard
        setEvaluateLine={setEvaluateLine}
        setActiveLine={setActiveLine}
        setActiveColumn={setActiveColumn}
        row={activeLine}
        col={activeColumn}
      />
    </div>
  )
}

export default Main
