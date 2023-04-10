import { useEffect, useState } from 'react';
import axios from 'axios';



const ShinyHunter = () => {
    const [id, setId] =  useState(1);
  
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response=>{
            console.log(response.data.name);
        }).catch(err => {
            //this code will only run if the API responds w/ an error status (e.g. 400, 404, etc.)
            console.log("This is an error")
        })

        console.log(`Hello from the useEffectThe ID is: ${id}`);
    }, [id])

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
            </select>
            <label htmlFor="">Some string</label>
        </div>
    )
}

export default ShinyHunter;