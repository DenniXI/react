import { useState } from "react";


function createData() {
    return {
        username: '',
        password: '',
        session: false,
    }
}

export function Login() {
    const [data, setData] = useState(createData())

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    function handleReset() {
        setData(createData())
    }

    function handleLogin(event) {
        event.preventDefault();
        console.log(data.username, data.password, data.session)
    }

    return (
        <div>
            <form action="#" onSubmit={handleLogin}>
                <h2>Username</h2>
                <input name="username" value={data.username} onChange={handleChange} />
                <h2>Password</h2>
                <input name="password" value={data.password} onChange={handleChange} />
                <h2>Remember</h2>
                <input name="session" type="checkbox" checked={data.session} onChange={handleChange} />
                <button disabled={!data.username || !data.password}>Login</button>
                <button onClick={handleReset}>Reset</button>
            </form>

        </div>
    )
}
