import React, { useEffect, useState } from 'react'
import './_header.scss'
import clsx from 'clsx'
import QuestionMark from '../SVGs/QuestionMark/QuestionMark'
import Statistics from '../SVGs/Statistics/Statistics'
import Switch from '../Switch/Switch'
import { createPortal } from 'react-dom'
import Modal from '../Modal/Modal'
import StatisticsComponent from '../Statistics/StatisticsComponent'
import Instructions from '../Instructions/Instructions'

type HeaderProps = {
  trigger?: null | string
}

const Header = ({ trigger = null }: HeaderProps) => {
  const [openModal, setOpenHelpModal] = useState<boolean>(false)
  const [whichModal, setWhichModal] = useState<string>('help')
  const openHelpModal = (type: string) => () => {
    setOpenHelpModal((prev) => !prev)
    setWhichModal(type)
  }

  useEffect(() => {
    if (trigger) {
      setOpenHelpModal(true)
      setWhichModal(trigger)
    }
  }, [trigger])

  return (
    <div className={clsx(['bg-white-2', 'header', 'flex items-center', 'justify-between'])}>
      <QuestionMark onPress={openHelpModal('help')} />
      <div className='header--title font-bold color-black'>WORDLE</div>
      <div className='flex gap-2 items-center'>
        <Statistics onPress={openHelpModal('stats')} />
        <div className='header--switch color-black'>
          <Switch />
        </div>
      </div>
      {openModal &&
        createPortal(
          <Modal onClose={() => setOpenHelpModal(false)}>
            {whichModal === 'stats' ? <StatisticsComponent /> : <Instructions />}
          </Modal>,
          document.body,
        )}
    </div>
  )
}

export default Header
