import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const Statistics = ({ onPress }: { onPress: () => void }) => {
  const { theme } = useContext(ThemeContext)
  const [fill, setFill] = useState('#818181')
  useEffect(() => {
    setFill(theme === 'light' ? '#818181' : '#DADCE0')
  }, [])
  return (
    <svg
      onClick={onPress}
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='32'
      viewBox='0 0 36 32'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.87868 4.87868C3 5.75736 3 7.17157 3 10V22C3 24.8284 3 26.2426 3.87868 27.1213C4.75736 28 6.17157 28 9 28H27C29.8284 28 31.2426 28 32.1213 27.1213C33 26.2426 33 24.8284 33 22V10C33 7.17157 33 5.75736 32.1213 4.87868C31.2426 4 29.8284 4 27 4H9C6.17157 4 4.75736 4 3.87868 4.87868ZM24 11C24.5523 11 25 11.4477 25 12V22.6667C25 23.219 24.5523 23.6667 24 23.6667C23.4477 23.6667 23 23.219 23 22.6667V12C23 11.4477 23.4477 11 24 11ZM13 14.6667C13 14.1144 12.5523 13.6667 12 13.6667C11.4477 13.6667 11 14.1144 11 14.6667V22.6667C11 23.219 11.4477 23.6667 12 23.6667C12.5523 23.6667 13 23.219 13 22.6667V14.6667ZM19 17.3333C19 16.781 18.5523 16.3333 18 16.3333C17.4477 16.3333 17 16.781 17 17.3333V22.6667C17 23.219 17.4477 23.6667 18 23.6667C18.5523 23.6667 19 23.219 19 22.6667V17.3333Z'
        fill={fill}
      />
    </svg>
  )
}

export default Statistics
