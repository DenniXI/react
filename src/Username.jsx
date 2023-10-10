import { useState } from "react"

export function Username() {

    const [value, setValue] = useState('')

    function handleChange(event) {
        console.log(value)

        setValue(event.target.value)
    }

    return (
        <div>
            <h3>My username</h3>
            <input name="username" type="text" value={value} onChange={handleChange} />
        </div>
    )
}