import { useState } from "react"

export function Counter(){
    const [counter, setCounter] = useState(0)

    function handleIncrementCounter(){
        setCounter ((c) => c + 1)
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrementCounter}>Increment</button>
        </div>
    )
}