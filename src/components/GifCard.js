import React,{ useState } from 'react'
import SearchField from './SearchField'
import axios from 'axios'
export default function GifCard() {
    const [Results, setResults] = useState([])
    async function searchtrend(){
        
        
        await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=6nm9q7cNwt2dMkVdxrP4HeDkjw8dcVOt`)
        .then(response =>{
            setResults(response.data.data)
                
            // console.log(response.data)
            })}
   
    return (
        <div>
           <div> 
          <button type="button" className="btn btn-primary" onClick={searchtrend}>Trending</button>
          </div>
          {
                Results.map(e =>{
                    return(
                    <div id='divsize' inline-block key = {e.id}>
                        <img src = {e.images.original.url}></img>
                        {/*console.log(Results)*/}
                    </div>)
                })
            }
        </div>
    )
}
