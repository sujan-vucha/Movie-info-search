import React from "react";

const MovieCard=({movie})=>{
    return(
        <div className="container">
            <div className="movie"> 
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster!=='N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt="title"/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div> 
            </div>
            </div>
    )
}
export default MovieCard