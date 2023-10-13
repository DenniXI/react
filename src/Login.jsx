import { FocusableInput } from "./FocusableInput";

export function Login() {
    function handleFormSubmit(event) {
        event.preventDefault()

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