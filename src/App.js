import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import searchIcon from './search.svg';
import Moviecard from "./Moviecard"
//90533ca0
const url="http://www.omdbapi.com?apikey=90533ca0&"
const App=()=>{
    const [movies,ssetMovies]=useState([])
    const[searchTerm,setSearchTerm]=useState("")
    const searchMovies=async (title)=>{
        const response=await fetch(`${url}s=${title}`)
        const data= await response.json()
        ssetMovies(data.Search)

    } 
    const movie1={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
    }
    useEffect(()=>{
        searchMovies("spiderman")
    },[])
    
    
    return(
        <div className="app">
            <h1>MovieInfoSearch</h1>

            <div className="search">
                <input placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={searchIcon} alt="icon"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
             movies.length>0?(
                <div className="container">
                {movies.map((moviee)=>{
                    return(
                        <Moviecard movie={moviee}/>
                    )
                })}
                
            </div>
             ) :(
                <div className="emp"><h2> movie not found</h2></div>
             )
            }
            
        </div>
    )
}

export default App