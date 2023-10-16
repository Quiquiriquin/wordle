import React, { useContext } from 'react'
import { GeneralContext } from '../../context/GeneralContext'
import Countdown from '../Countdown/Countdown'

const StatisticsComponent = () => {
  const { wins, losses } = useContext(GeneralContext)

  return (
    <>
      <div className='modal--title font-bold max-[495px]:mb-8 mb-6 text-center'>Estadísticas</div>
      <div className='flex justify-between mx-auto' style={{ minWidth: '80%', maxWidth: '80%' }}>
        <div className='modal--score text-center mb-12'>
          <label className='block font-bold text-2xl sm:text-3xl'>
            {(losses || 0) + (wins || 0)}
          </label>
          <label className='block text-lg sm:text-xl'>Jugadas</label>
        </div>
        <div className='modal--score justify-center text-center'>
          <label className='block font-bold text-2xl sm:text-3xl'>{wins || 0}</label>
          <label className='block text-lg sm:text-xl'>Ganadas</label>
        </div>
      </div>
      <div className='modal--next-word flex flex-col items-center'>
        <label className='block'>Siguiente palabra</label>
        <Countdown />
      </div>
    </>
  )
}

export default StatisticsComponent
