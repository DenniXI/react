export function Container({title, children}){

    return (
        <div className="container">
            <h1>{title}</h1>
            <h2>Questo è il mio container</h2>
            <div>
                {children}
            </div>
        </div>
    )
}