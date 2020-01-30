import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Movie({match}) {
  useEffect(() => {
    loadMovies()
    console.log(match);
  },[]);

const [movie, setItem] = useState([]);
  
const loadMovies = async () => {
  const data = await fetch(`http://145.24.222.104:8000/movies/${match.params.id}`);
  const movie = await data.json();
  setItem(movie)
  console.log(movie)
};

if(movie.name){
  return (
    <div > 
      <h1> {movie.name} </h1>
      <h2>genre: {movie.genre} </h2>
      <p>description: {movie.description} </p>
      
      <Link  to={`/movies/${movie._id}/edit`} ><button> aanpassen </button> </Link>
      <Link  to={`/movies/${movie._id}/Delete`} ><button> verweideren </button> </Link>
    </div>
  );
  } else {
    return ( <h1> geem film gevonden </h1> );
  }
}




export default Movie;


