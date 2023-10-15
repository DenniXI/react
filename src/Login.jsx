import { useState } from "react";


function createData() {
    return {
        username: '',
        password: '',
        session: false,
    }
}

export function Login({log}) {
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

    function handleLog(){
        log(data)
    }
    


    return (
        <div>
            <h2>Username</h2>
            <input name="username" value={data.username} onChange={handleChange} />
            <h2>Password</h2>
            <input name="password" value={data.value} onChange={handleChange} />
            <h2>Remember</h2>
            <input name="checkbox" type="checkbox" value={data.checked} onChange={handleChange} />
            <button disabled={!data.username || !data.password} onClick={handleLog}>Login</button>
        </div>
    )
}
