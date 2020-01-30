import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav> 
      <h1> Tim's Movie Api</h1>
      <ul className="nav-links">
        <Link to="/">
          <li>Overzicht</li>
        </Link>
        <Link to="/toevoegen">
          <li>Toevoegen</li>
        </Link>
        <Link to="/About">
        <li>about</li>
        </Link>     
      </ul>
    </nav>
  );
}

export default Nav;
