import { useEffect, useState } from "react"
import { GitHubUser } from "./GitHubUser"

export function GitHubUsers() {

    const [users, setUsers] = useState([])
    const [data, setData] = useState('')

    function handleInput(event) {
        setData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setUsers(u => [...u, data]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={handleInput} />
                <button type="submit">Find User</button>
            </form>
            <ul>
                {users.map(item => (
                    <li key={item}>
                        <GitHubUser username={item} />
                    </li>
                ))}
            </ul>
            
        </div>
    )
}