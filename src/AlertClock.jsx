import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'

export function AlertClock() {
  const [time, setTime] = useState('')

  const language = useContext(LanguageContext)

  function handleTime() {
    const time = new Date().toLocaleTimeString()
    return time
    // { language == 'it' ? alert(`L ora attuale è: ${time}`) : alert(`The current time is: ${time}`) }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(handleTime());
    }, 5000)

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <div>
      {language == 'it' ? <h2>Sono le:</h2> : <h2>Its:</h2>}
      <h1>{time}</h1>
    </div>

  )
}