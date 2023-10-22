import './index.css'
import { AlertClock } from './AlertClock'
import { Container } from './Container'
import { LanguageContext } from './LanguageContext'
import { useState } from 'react'
import { GitHubUser } from './GitHubUser'
import { GitHubUsers } from './GitHubUsers'
import { Counter } from './Counter'
import { ControlledForm } from './ControlledForm'

function App() {
  // const [language, setLanguage] = useState('it')

  // function handleLanguage(event) {
  //   setLanguage(event.target.value)
  // }

  return (
    <div>
      <ControlledForm />
    </div>
  )
}

export default App