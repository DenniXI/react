import { useEffect, useRef, useState } from "react"

export function FocusableInput() {

    const [username, setUsername] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    function handleInput(event) {
        setUsername(event.target.value)
    }
    return (
        <div>
            <h2>Focus on Input</h2>
            <input ref={inputRef}
                name="username"
                value={username}
                onChange={handleInput}
            />
        </div>

    )
}