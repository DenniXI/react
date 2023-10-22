import { useEffect, useRef, useState } from "react";
import { useCounter } from "./UseCounter";

export function Counter({ initialValue = 0}) {
    //Styling

    const style = {
        backgroundColor: 'gray',
        color: 'white',
        border: '1px solid black'
    }

    //End Styling
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
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
    

    return (
        <div style={style}>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}