import React from 'react'
import {Link } from 'react-router-dom';

class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            films: null
        }
        this.style = {
            backgroundColor : "#f1f1f1"
        }
    }

    async componentDidMount() {
        const result = await fetch("https://swapi.co/api/films/");
        const data = await result.json();
        this.setState({
            films: data.results.sort((a, b) =>
                a.release_date > b.release_date
                    ? 1
                    : b.release_date > a.release_date
                        ? -1
                        : 0
            )
        });
        
        this.setState({
            films: this.state.films.map(x => {
                const splitted = x.url.split("/");
                const id = splitted[splitted.length - 2];
                x.id = id;
                return x
            })
        })
    }
    render() {
        return this.state.films ? (
            <div>
                <h1 className="text-center mt-5">The Movies of Star Wars</h1>
                <div className="container">
                {this.state.films.map(film => (
                    <div className="card text-center align-items-center text-center mt-5">
                        <div className="card-body">
                            <h5 className="card-title">{film.title}</h5>
                            <p className="card-text">{film.opening_crawl}</p>
                            <Link to={"/FilmDetails/" + film.id} className="btn btn-primary">Film Details</Link>
                        </div>
                        <div className="card-footer text-muted">
                            {film.release_date}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
            : (<div className="text-center">
                <h1><strong className="text-center">Movies are loading...</strong></h1>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>)
    }
}
export default Movies;