import React from 'react'

class FilmDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film: null
        }
    }
    async componentDidMount() {
        const result = await fetch(`https://swapi.co/api/films/${this.props.match.params.id}/`);
        const data = await result.json();
        console.log(data)
        this.setState({ film: data });

    }
    render() {
        const films = this.state.film;
        return this.state.film ? (
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">{films.title}</h1>
                        <p class="lead text-muted">{films.opening_crawl}</p>
                        <p>
                        Release Date: 
                         <small className="text-letf"> {films.release_date }</small>
                        </p>
                        <p>
                        Director: 
                         <small className="text-letf"> {films.release_date }</small>
                        </p>
                        <p>
                        Producer: 
                         <small className="text-letf"> {films.release_date }</small>
                        </p>
                    </div>
                </section>
            </div>
        ) : (<div className="text-center">
            <h1><strong className="text-center">Film Detail is loading...</strong></h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>)
    }
}


export default FilmDetails;