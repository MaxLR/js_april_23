import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

const ViewOne = () => {
    const { name } = useParams();

    //initialized as an empty object to avoid undefined.property errors
    const [pokemonData, setData] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                console.log(res.data);
                const pokeData = {}
                pokeData.pokeName = res.data.name;
                pokeData.height = res.data.height;
                pokeData.shiny_url = res.data.sprites.front_shiny;
                setData(pokeData);
            })
            .catch(err => {
                console.log(err);
            })
    }, [name])

    const { pokeName, height, shiny_url } = pokemonData;
    
    return (
        <div>
            <h1>Name: {pokeName}</h1>
            <h1>Height: {height}</h1>
            <img src={shiny_url} alt={`shiny sprite for pokemon ${pokeName}`}  />
            <br />
            <Link to="/pokemon/bulbasaur">Bulbasaur Link</Link>
        </div>
    )
}

export default ViewOne;