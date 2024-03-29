import React, { useContext, useEffect, useState } from 'react'
import './_main.scss'
import { ThemeContext } from '../../context/ThemeContext'
import clsx from 'clsx'
import { GeneralContext } from '../../context/GeneralContext'
import InputLine from '../../components/InputLine/InputLine'
import Keyboard from '../../components/Keyboard/Keyboard'
import Header from '../../components/Header/Header'

export const getRandFromWords = (words: string[]) => {
  const howManyWordsAre = words?.length - 1
  return Math.floor(Math.random() * howManyWordsAre)
}

export const resetInputs = () => {
  const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input')
  allInputs.forEach((input) => {
    input.classList.remove('bg-green-1')
    input.classList.remove('bg-yellow-1')
    input.classList.remove('bg-gray-2')
  })
}

const Main = () => {
  const { theme } = useContext(ThemeContext)
  const { words, setWins, word, setWord, setLosses } = useContext(GeneralContext)
  const rows = [0, 1, 2, 3, 4]
  const [activeLine, setActiveLine] = useState<number>(0)
  const [activeColumn, setActiveColumn] = useState<number>(0)
  const [evaluateLine, setEvaluateLine] = useState<boolean>(false)
  const [triggerModal, setTriggerModal] = useState<string>('')

  if (!words) {
    return <div>Error</div>
  }

  useEffect(() => {
    setWord(words[getRandFromWords(words)])
  }, [words])

  useEffect(() => {
    document.body.className = theme || ''
  }, [theme])

  useEffect(() => {
    setTimeout(() => {
      const successWords: NodeListOf<Element> = document.querySelectorAll('.bg-green-1')
      const rowSuccess: number[] = []
      if (successWords?.length > 0) {
        successWords.forEach(({ id }) => {
          if (id.includes(`input_${activeLine - 1}`)) {
            rowSuccess.push(1)
          }
        })
      }
      if (rowSuccess.length === 5) {
        setWins((prev) => {
          const wins = ++prev
          localStorage.setItem('wins', `${wins}`)
          const avoid = localStorage.getItem('avoid_words') || ''
          localStorage.setItem('avoid_words', `${avoid},${word}`)
          return wins
        })
        resetInputs()
        setActiveColumn(0)
        setActiveLine(0)
        setTriggerModal('stats')
        setWord(words[getRandFromWords(words)])
        setTimeout(() => setTriggerModal(''), 50)
      }
      if (rowSuccess.length < 5 && activeLine >= 5 && setLosses) {
        setLosses((prev) => {
          const loss = ++prev
          localStorage.setItem('losses', `${loss}`)
          const avoid = localStorage.getItem('avoid_words') || ''
          localStorage.setItem('avoid_words', `${avoid},${word}`)
          return loss
        })
        resetInputs()
        setActiveColumn(0)
        setActiveLine(0)
        setTriggerModal('stats')
        setWord(words[getRandFromWords(words)])
        setTimeout(() => setTriggerModal(''), 50)
      }
      setEvaluateLine(false)
    }, 150)
  }, [activeLine])

  useEffect(() => {
    if (!localStorage.getItem('time_to_add')) {
      localStorage.setItem('time_to_add', '302000')
    }
    if (!localStorage.getItem('first_time')) {
      localStorage.setItem('first_time', 'false')
      setTriggerModal('help')
    }
  }, [])

  return (
    <div className={'main-container'}>
      <Header trigger={triggerModal} />
      <div className={clsx(theme, 'flex flex-col gap-2 items-center justify-center')}>
        {rows.map((row) => (
          <InputLine
            reset={!!triggerModal}
            col={activeColumn}
            activeLine={activeLine}
            evaluate={evaluateLine}
            setActiveColumn={setActiveColumn}
            word={word}
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
