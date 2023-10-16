import React, { useState } from 'react'
import './_header.scss'
import clsx from 'clsx'
import QuestionMark from '../SVGs/QuestionMark/QuestionMark'
import Statistics from '../SVGs/Statistics/Statistics'
import Switch from '../Switch/Switch'
import { createPortal } from 'react-dom'
import Modal from '../Modal/Modal'

const Header = () => {
  const [openModal, setOpenHelpModal] = useState<boolean>(false)
  const openHelpModal = () => setOpenHelpModal((prev) => !prev)
  return (
    <div className={clsx(['bg-white-2', 'header', 'flex items-center', 'justify-between'])}>
      <QuestionMark onPress={openHelpModal} />
      <div className='header--title font-bold color-black'>WORDLE</div>
      <div className='flex gap-2 items-center'>
        <Statistics />
        <div className='header--switch color-black'>
          <Switch />
        </div>
      </div>
      {openModal && createPortal(<Modal onClose={() => setOpenHelpModal(false)} />, document.body)}
    </div>
  )
}

export default Header
