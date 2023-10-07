import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <>
            {name === "" && <p>Welcome,Ospite </p>}
            {name && <p>Welcome, {name}!</p>}
            {age > 18 ? <Age age={age}/> : <p></p>}
        </>
    )
}