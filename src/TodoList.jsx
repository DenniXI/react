import { useState } from "react"
import classes from './TodoList.module.css'

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
        setInput('')
    }

    function handleReset(){
        setItems(['prova 1', 'prova 2'])
    }

    function handleRemove(index){
        setItems(items.filter((_, i)=> i !== index));
    }
    return (
        <div className={classes.list}>
            <h4>To do List</h4>
            <ul>
                {items.map((item, index)=>(
                    <li key={index}>
                        {item} 
                    <button onClick={()=>handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            
            <input type="text" value={input} onChange={handleInputValue} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}