import React from 'react';
import './App.css';
import Movie from './Movie'; 
import About from './About';
import Home from './Home';
import Toevoegen from './Toevoegen';
import Nav from './Nav';
import Delete from './Delete';
import Edit from './Edit';
import Movies from './Movies'; 
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">


          <Nav/>
          <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/movies" exact component={Movies}/>
            <Route path="/toevoegen" component={Toevoegen}/>
            <Route path="/about/:id" component={About}/>
            <Route path="/movies/:id" exact component={Movie}/>
            <Route path="/movies/p/:pagination" exact component={Home}/>
            <Route path="/movies/:id/delete" component={Delete}/>
            <Route path="/movies/:id/edit" component={Edit}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
