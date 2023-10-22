import { useCallback, useState } from "react"

export function useCounter(initialValue = 0){

    const [counter, setCounter] = useState(initialValue)

    const handleIncrementCounter = useCallback(()=> {
        setCounter((c) => c + 1)
    },[counter])

    const handleDecrementCounter = useCallback(()=> {
        setCounter((c) => c - 1)
    }, [counter])

    const handleResetCounter = useCallback(() => {
        setCounter(initialValue)
    }, [])

    return {
        counter: counter,
        onIncrement: handleIncrementCounter,
        onDecrement: handleDecrementCounter,
        onReset: handleResetCounter,
    }
        
            
            
        
    
    
}