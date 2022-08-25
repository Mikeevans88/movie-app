import React from "react"

const MovieCard = ({ movie }) => {
    return (<div className="movie">
    <div>
         <div>
             <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
             <h3>{movie.Title}</h3>
         <span>{movie.Type}</span>
         <p>{movie.Year}</p>  
         </div>
         </div>
     </div>
);
}

export default MovieCard;