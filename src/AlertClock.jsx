import App from './App'
import './App.css'

function AlertClock() {
  function handleButtonClick() {
    const time = new Date()
    alert(`The current time is: ${time.toLocaleTimeString()}`)
  }
  return (
    <>
      <App onClick={handleButtonClick} />
    </>
  )
}

export default AlertClock
