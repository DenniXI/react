import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome() {

    const [value, setValue] = useState('')

    function handleChange(event) {
        console.log()

        setValue(event.target.value)
    }

    return (
        <div>
            <h1>My Input</h1>
            <input name="username" type="text" value={value} onChange={handleChange} />
            <Welcome value={value}/>
        </div>
    )
}