export function Container({children}){

    return (
        <div className="container">
            <h1>Questo è il mio container</h1>
            <div>
                {children}
            </div>
        </div>
    )
}