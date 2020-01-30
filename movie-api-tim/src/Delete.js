import React, { useEffect,   } from 'react';
import { Link } from "react-router-dom";

function Delete({match} ) {

  useEffect(() => {
    Deletemovie()
  },[]);

  const Deletemovie = async () => {
    await fetch(
      `http://145.24.222.104:8000/movies/${match.params.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        console.log(result);
      });

  };

  return (
    <div > 
      <h1> Verweidert </h1>
      <Link to={`/movies/`}><button>Terug naar het overzicht </button></Link>
    </div>
  );
}

export default Delete;




