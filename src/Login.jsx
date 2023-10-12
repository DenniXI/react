export function Login() {
    function handleFormSubmit(event) {
        event.preventDefault()

        //Questo è uno dei metodi per accedere al valore corrente di username e password (e anche della checkbox)
        // const username = event.target.elements.namedItem('username').value;
        // const password = event.target.elements.namedItem('password').value;
        // const session = event.target.elements.namedItem('session').checked;
        // const data = {
        //     username,
        //     password,
        //     session,
        // }
        // console.log(data)

        //Questo è un altro metodo:
        const formData = new FormData(event.target)
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            session: formData.get('session'),
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

