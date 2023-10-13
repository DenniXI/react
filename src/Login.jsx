export function Login() {
    function handleFormSubmit(event) {
        event.preventDefault()

        //Questo è il metodo standard per accedere ai valori del form:
        // const formData = {
        //     username: event.target.username.value,
        //     password: event.target.password.value,
        //     session: event.target.session.checked
        // }

        //Questo è un metodo non standard
        // const formData = new FormData(event.target)
        // const username =  formData.get('username');
        // const password = formData.get('password');
        // const session = formData.get('session');
        

        const formData = {
            username: document.forms[0].elements.username.value,
            password: document.forms[0].elements.password.value,
        };
        console.log(formData)
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