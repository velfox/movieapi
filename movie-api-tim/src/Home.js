import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Home({match}) {
  console.log(match)
  useEffect(() => {
    loadMovies()
  },[]);


  const [movies, setItems] = useState([]);
  const [paginas, setPaginas] = useState([]);

  const loadMovies = async () => {

    if(match.params.pagination){
      var data = await fetch(`http://145.24.222.104:8000/movies/?${match.params.pagination}`);
   
    } else {
      var data = await fetch("http://145.24.222.104:8000/movies/?start=1&limit=5");
    }

 
    const movies = await data.json();
    const paginas = movies
    setItems(movies.items)
    setPaginas(paginas.pagination)
 
  }

 console.log(paginas._links)



  return (


    <div>          
      {movies.map(movie => (
        <h1>
          <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
          </h1>

      ))}
    </div>
  );
}
  



export default Home;
