import { useState } from "react"

export function Password() {

    const [password, setPassword] = useState('')

    function handleChange(event) {
        console.log(password)

        setPassword(event.target.value)
    }

    return (
        <div>
            <h3>My Password</h3>
            <input name="password" type="text" value={password} onChange={handleChange} />
            
        </div>
    )
}