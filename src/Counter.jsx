import { useEffect, useRef, useState } from "react";

export function Counter({ initialValue = 0 }) {
    //Styling
    const style = {
        backgroundColor: 'gray',
        color: 'white',
        border: '1px solid black'
    }
    //End Styling
    const [counter, setCounter] = useState(initialValue);
    const prevRef = useRef(initialValue);
    const directionRef = useRef('');

    useEffect(() => {
        if (counter > prevRef.current) {
            directionRef.current = 'up'
        } else if (counter < prevRef.current) {
            directionRef.current = 'down'
        } else {
            directionRef.current = ''
        }

        prevRef.current = counter

        if (directionRef.current !== '') {
            console.log(directionRef.current);
        }
        
    }, [counter])
    function handleIncrementCounter() {
        setCounter((c) => c + 1)
    }
    function handleDecrementCounter() {
        setCounter((c) => c - 1)
    }
    function resetCounter() {
        setCounter((c) => initialValue)
    }

    return (
        <div style={style}>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrementCounter}>+1</button>
            <button onClick={handleDecrementCounter}>-1</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}