export function Colors({color}){

    return (
        <>
            <ul>
                {color.map((itemColor)=> (
                    <li>{itemColor}</li>
                ))}
            </ul>
        </>
    )
}