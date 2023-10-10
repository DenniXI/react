import { useState } from "react"

export function Checkbox() {

    const [check, setCheck] = useState('')

    function handleChange(event) {
        console.log()

        setCheck(event.target.value)
    }

    return (
        <div>
            <h3>My Checkbox</h3>
            <label htmlFor="checkbox">Remember</label>
            <input name="checkbox" type="checkbox" value={check} onChange={handleChange} />
            
        </div>
    )
}