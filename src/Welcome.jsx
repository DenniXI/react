export function Welcome({ name }) {
    return (
        <>
            {name === "" && <p>Welcome, Ospite</p>}
            {name && <p>Welcome, {name}!</p>}
        </>
    )
}