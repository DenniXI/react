import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)
    // Add a side effect to the Counter component from 6.1 that prints the current value of the counter inside of the console.
    useEffect(()=>{
        console.log(`the current value of counter is: ${counter}`)
    },[counter])
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