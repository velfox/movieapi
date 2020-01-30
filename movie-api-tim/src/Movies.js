import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Movies() {
 
  useEffect(() => {
    loadMovies()
  },[]);


  const [movies, setItems] = useState([]);
  

 const loadMovies = async () => {

   const data = await fetch("http://145.24.222.104:8000/movies/?start=1&limit=5");

   const movies = await data.json();

   setItems(movies.items)

 }

 console.log(movies)

//  const [movies, setMovies] = useState([]);


  return (
    <div >
      {movies.map(movie => (
        <h1> <Link to={`/movies/${movie._id}`}>{movie.name}</Link> </h1>
      ))}
    </div>
  );
}
  



export default Movies;
