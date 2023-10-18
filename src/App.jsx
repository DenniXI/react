

import { AlertClock } from './AlertClock'
import './App.css'

function App() {
    function handleButtonClick(){
        const time = new Date()
        alert(`The current time is: ${time.toLocaleTimeString()}`)
    }

  return (
    <>
      <AlertClock event={handleButtonClick} />
    </>
  )
}

export default App