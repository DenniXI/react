import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    function handleIncrementCounter(){
        setCounter((c) => c + 1)
    }
    function handleDecrementCounter(){
        setCounter((c) => c - 1)
    }
    function handleResetCounter(){
        setCounter((c) => initialValue)
    }

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={handleIncrementCounter}>Increment</button>
            <button onClick={handleDecrementCounter}>Decrement</button>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    )
}