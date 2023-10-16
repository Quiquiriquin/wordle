import { useEffect, useState } from 'react'

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}

export const useCountDown = ({ startTime }: { startTime?: number | null }) => {
  const targetDate = startTime
  const [countDown, setCountDown] = useState<number>((targetDate || 0) - new Date().getTime())
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((targetDate || 0) - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return getReturnValues(countDown)
}