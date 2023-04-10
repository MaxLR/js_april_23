import { useEffect, useState } from 'react';
import axios from 'axios';



const ShinyHunter = () => {
    const [id, setId] =  useState(1);
    const [shinyURL, setShinyUrl] = useState("")


    const fetchWithAwait = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        try {
            console.log(response.data.name);
            console.log(response.data.sprites.front_shiny);
        } catch {
            console.log("This is an async/await error");
        }
        
        //this function *does* run & update state, but react doesn't re-render the update portions of the page as a result
        setShinyUrl(response.data.sprites.front_shiny);
        console.log(`Hello from the async/await function call. The ID is: ${id}`);
    }
    
    const fetchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response=>{
            console.log(response.data.name);
            setShinyUrl(response.data.sprites.front_shiny)
        }).catch(err => {
            //this code will only run if the API responds w/ an error status (e.g. 400, 404, etc.)
            console.log("This is an error")
        })

        console.log(`Hello from the useEffect. The ID is: ${id}`);
    }
  
    //passing fetchPokemon as a callback function into useEffect so it runs on load & whenever id changes
    useEffect(fetchPokemon, [id])

    const handleId = e => {
        setId(e.target.value);
    }
    
    return(
        <div>
            <h1>Welcome to Shiny Hunter</h1>
            <select onChange={handleId}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => {
                    return <option key={num} value={num}>{num}</option>
                })}
                <option value={130}>130</option>
            </select>
            <img src={shinyURL} alt="Shiny sprite"/>
        </div>
    )
}

export default ShinyHunter;