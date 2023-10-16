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

type GeneralProviderInterface = {
  words?: string[]
  wins?: number
  setWins: Dispatch<SetStateAction<number>>
  losses?: number
  setLosses?: Dispatch<SetStateAction<number>>
}

const GeneralContext = createContext<GeneralProviderInterface>({
  words: [],
  wins: 0,
  setWins: () => {},
  losses: 0,
  setLosses: () => {},
})

const { Provider, Consumer } = GeneralContext
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GeneralProvider = ({ children }: { children: ReactComponentElement<any> }) => {
  const [words, updateWords] = useState<string[]>([])
  const [wins, setWins] = useState<number>(Number(localStorage.getItem('wins')) || 0)
  const [losses, setLosses] = useState<number>(0)
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
      }}
    >
      {children}
    </Provider>
  )
}

export { GeneralProvider, Consumer as GeneralConsumer, GeneralContext }
