/* eslint-disable react/react-in-jsx-scope */
import { Dispatch, ReactComponentElement, SetStateAction, createContext, useState } from 'react'

type ThemeProviderInterface = {
  theme?: string
  updateTheme?: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<ThemeProviderInterface>({})

const { Provider, Consumer } = ThemeContext
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProvider = ({ children }: { children: ReactComponentElement<any> }) => {
  const [theme, updateTheme] = useState<string>('dark')
  return (
    <Provider
      value={{
        theme,
        updateTheme,
      }}
    >
      {children}
    </Provider>
  )
}

export { ThemeProvider, Consumer as ThemeConsumer, ThemeContext }
