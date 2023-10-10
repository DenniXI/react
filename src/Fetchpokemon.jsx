import { useState } from "react"
import { useEffect } from "react"
import { DisplayPokemon } from "./DisplayPokemon"

export function FetchPokemon() {

    const [value, setValue] = useState([])

    function handleClick(){
        console.log("click")
    }
    //Primo useEffect
    useEffect(() => {
        async function fetchApi() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
                const data = await response.json()


                setValue(data.results)
            } catch (error) {
                console.log(error)
            }
        }


        fetchApi()
    }, [])

    // Secondo useEffect:
    useEffect(() => {
        console.log(value)
    }, [value])

    // if(value){
    //     console.log(value)
    // }

    return (
        <div>
            <button onClick={handleClick} >Click me!</button>
            <ul>
                {value.length > 0 ? value.map((item, index) => {
                    return <DisplayPokemon key={index + item.name} pokemonName={item.name} />
                }) : <h1>Loading...</h1>}

            </ul>
        </div>

    )
}