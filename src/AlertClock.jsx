export function AlertClock(){
    function handleButtonClick(){
        const time = new Date()
        alert(`The current time is: ${time.toLocaleTimeString()}`)
    }


    return <button onClick= {handleButtonClick}>Click to show the time</button>
}