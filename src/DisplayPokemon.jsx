import "./DisplayPokemon.css" 

export function DisplayPokemon({pokemonName}){

    return (
        <li className="lista">{pokemonName}</li>
    )
}