import { useState } from "react"

export function Counter(){
    const [counter, setCounter] = useState(0)

    function handleIncrementCounter(){
        //è meglio che sia scritta in questo modo per andare "sul sicuro" e perchè permette di inserire piu "setter".
        
        // setCounter ((c) => c + 1)
        
        //Altrimenti si puo scrivere cosi:
        setCounter (counter + 1)
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrementCounter}>Increment</button>
        </div>
    )
}