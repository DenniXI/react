export function Welcome({ name, age }) {
    return (
        <>
            {name === "" && <p>Welcome,Ospite </p>}
            {name && <p>Welcome, {name}!</p>}
            <p>Your age is {age}</p>
        </>
    )
}