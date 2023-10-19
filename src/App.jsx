import './index.css'
import { AlertClock } from './AlertClock'
import { Container } from './Container'
import { LanguageContext } from './LanguageContext'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('it')

  function handleLanguage(event) {
    setLanguage(event.target.value)
  }

  return (
    <div>
      <select value={language} onChange={handleLanguage}>
        <option value='it'>Italiano</option>
        <option value='en'>Inglese</option>
      </select>
      {/* Essenzialmente non funziona più nulla perchè provider è il contenitore del valore condiviso. */}
      <LanguageContext value={language}>
        <AlertClock />
      </LanguageContext>
    </div>
  )
}

export default App