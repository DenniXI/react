//Create a MultiButton component with three buttons, each with a name prop set to "one", "two" and "three" respectively. 
//Attach the same event handler to each button that prints the name prop to the console when clicked by reading the event.target.name property

export function MultiButton(){
    function handlerName(event) {
        console.log(event.target.name)
    }

    return (
        <div>
            <button name="one"onClick={handlerName}>Click me!</button>
            <button name="two"onClick={handlerName}>Click me!</button>
            <button name="three"onClick={handlerName}>Click me!</button>
        </div>
    )
}