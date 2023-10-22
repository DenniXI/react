import { useForm } from "./UseForm"

export function ControlledForm() {

    const { value, onChangeUsername, onChangePassword } = useForm({})


    return <>
        <form>
            <input type="text" value={value.username} onChange={onChangeUsername} placeholder="username"/>
            <input type="password" value={value.password} onChange={onChangePassword} placeholder="password"/>
            <button>Submit</button>
        </form>
    </>


}