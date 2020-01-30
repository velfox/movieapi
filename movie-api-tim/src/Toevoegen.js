import React from 'react';
import { Link } from "react-router-dom";

export default class Toevoegen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            message: 'voeg een film toe'
        }
        
    }

    formHandsubmit = event => {
        event.preventDefault()
        fetch('http://145.24.222.104:8000/movies/',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                description: event.target.description.value,
                genre: event.target.genre.value
            })
        }).then(res => {
            if(res.ok){
                this.setState({
                    status: 'film toegevoegd'
                })
            }
        })
    }



    render(){
        console.log(this.state.status)
        if(!this.state.status) {
          return(
            <div>
                <h1>voeg een film toe</h1>
                {
                    this.state.message ? (
                        <div>{this.state.message}</div>
                    ) : (null)
                }
                <form onSubmit={this.formHandsubmit} action="" className="row">
                    <div className="col s12">
                        <div className="col s12 m6">
                            <p>film naam:</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name='name'/>
                        </div>
                        <div className="col s12 m6">
                            <p>descriptie hier:</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name='description'/>
                        </div>
                        <div className="col s12 m6">
                            <p>genre:</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name='genre'/>
                        </div>
                        <div className="col s12">
                            <input type="submit" value="create film" href=""/>
                        </div>
                    </div>
                </form>
              </div>
            )
          } else { 
            return( 
            <div>
            <h1> Film toegevoegd </h1>
            <Link to={`/movies/`}><button>Terug naar het overzicht </button></Link>
            </div>
            ) 
          }
    
    }
}