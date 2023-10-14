import React from 'react'
import './_header.scss'
import clsx from 'clsx'

const Header = () => {
  return (
    <div className={clsx(['bg-white-2', 'header', 'flex items-center', 'justify-between'])}>
      <div className='color-black'>AY</div>
      <div className='header--title font-bold color-black'>WORDLE</div>
      <div className='header--switch color-black'>Switch</div>
    </div>
  )
}

export default Header
