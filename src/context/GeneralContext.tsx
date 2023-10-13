/* eslint-disable react/react-in-jsx-scope */
import { ReactComponentElement, createContext, useCallback, useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import catalog from '../utils/catalog.txt'

type GeneralProviderInterface = {
  words?: string[]
}

const GeneralContext = createContext<GeneralProviderInterface>({
  words: [],
})

const { Provider, Consumer } = GeneralContext
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GeneralProvider = ({ children }: { children: ReactComponentElement<any> }) => {
  const [words, updateWords] = useState<string[]>([])
  const getWords = useCallback(async () => {
    try {
      const textResponse = await fetch(catalog)
      const textString = await textResponse.text()
      const arr = textString.split('\n').filter((word) => word.length === 5)
      updateWords(arr)
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
      }}
    >
      {children}
    </Provider>
  )
}

export { GeneralProvider, Consumer as GeneralConsumer, GeneralContext }
