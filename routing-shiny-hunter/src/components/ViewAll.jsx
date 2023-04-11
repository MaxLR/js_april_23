import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";


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
                return (
                    <div>
                        <Link to={`/pokemon/${pokemon}`}>{pokemon}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ViewAll;