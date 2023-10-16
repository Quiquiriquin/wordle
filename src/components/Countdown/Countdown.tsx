import React, { useContext } from 'react'
import { GeneralContext } from '../../context/GeneralContext'

const Countdown = () => {
  const { minutes, seconds, word } = useContext(GeneralContext)
  if (minutes + seconds <= 0) {
    return (
      <span>
        La palabra era <strong>{word.toUpperCase()}</strong>
      </span>
    )
  }

  return (
    <div>
      <label className='font-bold text-lg'>
        {minutes > 10 ? minutes : `0${minutes}`}: {seconds > 10 ? seconds : `0${seconds}`}
      </label>
    </div>
  )
}

export default Countdown
