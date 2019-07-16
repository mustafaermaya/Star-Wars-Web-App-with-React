import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
      text: ""
    };
    this.textChanged = this.textChanged.bind(this);
    this.search = this.search.bind(this);
  }
  async componentDidMount(){
    
  }
  async search() {
    this.setState({ loading: true });
    const result = await fetch(
      `https://swapi.co/api/films/?search=${this.state.text}`
    );
    const data = await result.json();

    console.log(data.results);
    this.setState({ movies: data.results, loading: false });
  }


  textChanged(e) {
    this.setState({ text: e.target.value });
  }

render() {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type something to search"
          onChange={this.textChanged}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.search}
          >
            Search
            </button>
        </div>
      </div>

      {this.state.loading ? "Loading..." : ""}

      <div className="list-group">
        {this.state.movies.map(movie => (
          <Link
            key={movie.episode_id}
            to={"/FilmDetails/" + movies.id}
            className="list-group-item"
          >
            {movie.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
}
