import axios from 'axios'
import React,{ useState } from 'react'
import GifCard from './GifCard'
export default function Appcomponent() {
    const [Results, setResults] = useState()
    async function Getrandom(){
        await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=6nm9q7cNwt2dMkVdxrP4HeDkjw8dcVOt`)
        .then(response =>{
            setResults(response.data.data.images.original.url)
            console.log(response.data)
        })
    }
    return (
        <div>
           <button type="button" className="btn btn-primary" onClick={Getrandom}>Random gif</button>
           <div>
           <img src = {Results}></img>
           </div>
        </div>
    )
}
