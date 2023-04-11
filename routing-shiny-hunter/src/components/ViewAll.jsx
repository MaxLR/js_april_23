import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";


const ViewAll = () => {
    const [pokemonList, setList] = useState([]);

    const fetchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => {
                console.log(res.data.results);
                const pokemonNames = res.data.results.map(pokeObj => {
                    return pokeObj.name
                })
                setList(pokemonNames);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    useEffect(fetchPokemon, []);

    
    return (
        <div>
            <h1>This is our View All Page!</h1>
            {pokemonList.map(pokemon => {
                return <p>{pokemon}</p>
            })}
        </div>
    )
}

export default ViewAll;