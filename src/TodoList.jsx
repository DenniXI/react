import { useState } from "react"
//Create a TodoList component that renders a ul tag with a li tag for each item 
//contained in the items state variable. 
//The items state variable should be an array of strings. 
//The TodoList component should also contain an input tag and a button. 
//When the button is clicked, the 
//event handler should add the value of the input tag to the items array.

export function TodoList() {

    const [items, setItems] = useState(['prova 1', 'prova 2'])
    
    const [input, setInput] = useState('')

    function handleInputValue(event){
        setInput(event.target.value)
    }

    function handleAdd(){
        setItems((items)=>{
            return [...items, input]
        })
    }
    return (
        <>
            <h4>To do List</h4>
            <ul>
                {items.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
            <input type="text" value={input} onChange={handleInputValue} />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}