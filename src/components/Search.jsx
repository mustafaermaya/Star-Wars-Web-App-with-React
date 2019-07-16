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
  async search() {
    this.setState({ loading: true });
    const result = await fetch(
      `https://swapi.co/api/films/?search=${this.state.text}`
    );
    const data = await result.json();

    console.log(data.results);
    this.setState({ movies: data.results, loading: false });
    this.setState({
      movies: this.state.movies.map(x => {
        const splitted = x.url.split("/");
        const id = splitted[splitted.length - 2];
        x.id = id;
        return x
      })
    })
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
            className="form-control text-center"
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

        <ul class="list-group text-center">
          {this.state.movies.map(movie => (
            <Link
              key={movie.episode_id}
              to={"/FilmDetails/" + movie.id}
              className="list-group-item"
            >
              {movie.title}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
