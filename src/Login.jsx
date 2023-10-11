

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


    return (
        <div>
            <input name="username" value={data.username} onChange={handleChange} />
            <input name="password" value={data.value} onChange={handleChange} />
            <input name="checkbox" type="checkbox" value={data.checked} onChange={handleChange} />
        </div>
    )
}
