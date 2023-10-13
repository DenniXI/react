export function Login() {
    function handleFormSubmit(event) {
        event.preventDefault()

        // Vantaggi: semplifica l'accesso ai dati del form.
        // Svantaggi: ma non offre un modo diretto per manipolare i dati 
        //in modo avanzato prima dell'invio.

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

