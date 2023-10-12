export function Login() {
    function handleFormSubmit(event) {
        event.preventDefault()
        const username = event.target.elements.namedItem('username').value;
        const password = event.target.elements.namedItem('password').value;
        const session = event.target.elements.namedItem('session').checked;


        const data = {
            username,
            password,
            session,
        }
        console.log(data)
    }
    return (
        <div>
            <form action="#" onSubmit={handleFormSubmit}>

                <h2>Username</h2>
                <input name="username" />

                <h2>Password</h2>
                <input name="password" type="password" />

                <h2>Remember</h2>
                <input name="session" type="checkbox" />

                <button>Login</button>
                <button type="reset">Reset</button>
            </form>

        </div>
    )
}

