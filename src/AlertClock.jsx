import classes from './Clock.scss'

export function AlertClock(){
  function handleButtonClick(){
      const time = new Date()
      alert(`The current time is: ${time.toLocaleTimeString()}`)
  }


  return <button className='time'onClick= {handleButtonClick}>Click to show the time</button>
}