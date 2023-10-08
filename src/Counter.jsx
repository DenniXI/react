import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    function handleIncrementCounter(){
        
        setCounter((c) => c + 1)
        
    }

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={handleIncrementCounter}>Increment</button>
        </div>
    )
}