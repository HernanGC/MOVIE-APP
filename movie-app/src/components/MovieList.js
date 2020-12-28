import React from 'react';


const MovieList = (props) => {
    return (
        <>
        { props.movies.map( (movie, index) => 
        <div className="image-container">
            <img src={movie.Poster} alt="movies"></img>
        </div> )}
        </>
    )
}

export default MovieList;