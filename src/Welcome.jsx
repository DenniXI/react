import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <>
            {name === "" && <p>Welcome,Ospite </p>}
            {name && <p>Welcome, {name}!</p>}
            <Age age={age}/>
        </>
    )
}