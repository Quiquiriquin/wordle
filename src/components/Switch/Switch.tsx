import React, { useContext } from 'react'
import './_switch.scss'
import clsx from 'clsx'
import { ThemeContext } from '../../context/ThemeContext'

const Switch = () => {
  const { updateTheme, theme } = useContext(ThemeContext)
  return (
    <div
      onClick={() => updateTheme(theme === 'light' ? 'dark' : 'light')}
      className={clsx('switch', theme === 'dark' && 'checked')}
    >
      <div className='clouds' />
      <div className='clouds low' />
      <div className='switch-thumb'></div>
    </div>
  )
}

export default Switch
