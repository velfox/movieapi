import React, { Component } from "react";
import { Link } from "react-router-dom";
class Edit extends Component {
  constructor() {
    super();
    this.state = {
      _id: null,
      name: null,
      genre: null,
      description: null,
      __v: null,
      _links: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }
  async fetchResult() {
    const res = await fetch(
      `http://145.24.222.104:8000/movies/${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(json);
  }
  componentDidMount() {
    this.fetchResult();
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async submitChange() {
    const res = await fetch(
      `http://145.24.222.104:8000/movies/${this.props.match.params.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state)
      }
    );
    const json = await res.status;
    if (json === 200) {
      this.setState({ success: "Wijzigingen opgeslagen" });
    }
  }
  render() {
    let success;
    if (this.state.success) {
      success = (
        <div className="alert alert-success" role="alert">
          <h2>{this.state.success}</h2>
          <Link to={`/movies/`}><button>Terug naar het overzicht </button></Link>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <p>{success}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2> aanpassen {this.state.name} </h2>
            <p>
              ID:{" "}
              <input
                type="text"
                name="id"
                value={this.state._id ? this.state._id : ""}
                id="id"
                className="form-control"
                readOnly
              ></input>
            </p>
            <p>
              Name:{" "}
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.name ? this.state.name : ""}
                id="name"
                className="form-control"
              ></input>
            </p>
            <p>
              genre:{" "}
              <input
                onChange={this.handleChange}
                type="text"
                name="genre"
                value={this.state.genre ? this.state.genre : ""}
                id="genre"
                className="form-control"
              ></input>
            </p>
            <p>
              description:{" "}
              <input
                onChange={this.handleChange}
                type="text"
                name="description"
                value={this.state.description ? this.state.description : ""}
                id="description"
                className="form-control"
              ></input>
            </p>
            <p>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.submitChange}
                value="Submit changes"
              >Opslaan</button>
            </p>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Edit;