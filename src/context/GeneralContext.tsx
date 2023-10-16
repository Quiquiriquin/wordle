/* eslint-disable react/react-in-jsx-scope */
import {
  Dispatch,
  ReactComponentElement,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import catalog from '../utils/catalog.txt'
import { useCountDown } from '../hooks/useCountDown'
import { getRandFromWords } from '../pages/Main/Main'

type GeneralProviderInterface = {
  words?: string[]
  wins?: number
  setWins: Dispatch<SetStateAction<number>>
  losses?: number
  setLosses?: Dispatch<SetStateAction<number>>
  baseStart?: number | null
  setBaseStart?: Dispatch<SetStateAction<number>>
  word: string
  setWord: Dispatch<SetStateAction<string>>
  minutes: number
  seconds: number
}

const GeneralContext = createContext<GeneralProviderInterface>({
  words: [],
  wins: 0,
  setWins: () => {},
  losses: 0,
  setLosses: () => {},
  baseStart: null,
  setBaseStart: () => {},
  word: '',
  setWord: () => {},
  minutes: 0,
  seconds: 0,
})

const { Provider, Consumer } = GeneralContext
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GeneralProvider = ({ children }: { children: ReactComponentElement<any> }) => {
  const [words, updateWords] = useState<string[]>([])
  const [word, setWord] = useState<string>('')
  const [baseStart, setBaseStart] = useState<number>(
    new Date().getTime() + (Number(localStorage.getItem('time_to_add')) || 302000),
  )
  const [wins, setWins] = useState<number>(Number(localStorage.getItem('wins')) || 0)
  const [losses, setLosses] = useState<number>(Number(localStorage.getItem('losses')) || 0)
  const [, , minutes, seconds] = useCountDown({ startTime: baseStart })
  const getWords = useCallback(async () => {
    try {
      const textResponse = await fetch(catalog)
      const textString = await textResponse.text()
      const arr = textString.split('\n').filter((word) => word.length === 5)
      const normalizedArr = arr.map((word) => word.normalize('NFD').replace(/\p{Diacritic}/gu, ''))
      const finalWords = normalizedArr.filter((word) => {
        const avoidWords = localStorage.getItem('avoid_words')
        return !avoidWords?.includes(word)
      })
      updateWords(finalWords)
    } catch (e) {
      console.log('ERROR:', e)
    }
  }, [])

  useEffect(() => {
    if (minutes + seconds <= -9) {
      setBaseStart(new Date().getTime() + (Number(localStorage.getItem('time_to_add')) || 302000))
    }
  }, [minutes, seconds])

  useEffect(() => {
    setWord(words[getRandFromWords(words)])
  }, [baseStart])

  useEffect(() => {
    getWords()
  }, [])
  return (
    <Provider
      value={{
        words,
        wins,
        setWins,
        losses,
        setLosses,
        setBaseStart,
        baseStart,
        word,
        setWord,
        minutes,
        seconds,
      }}
    >
      {children}
    </Provider>
  )
}

export { GeneralProvider, Consumer as GeneralConsumer, GeneralContext }
