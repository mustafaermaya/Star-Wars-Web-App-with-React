import React from 'react'
import { Link } from 'react-router-dom'

class Species extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            species: null
        }

    }
    async componentDidMount() {
        let data = [];
        const mainResult = await fetch("https://swapi.co/api/species/");
        const mainData = await mainResult.json();

        if (mainData.results && mainData.results.length) {
            data.push(...mainData.results);
        }

        let url = mainData.next;
        while (url) {
            const result = await fetch(url);
            const nextData = await result.json();
            if (nextData.results && nextData.results.length) {
                data.push(...nextData.results);
            }
            url = nextData.next;
        }

        this.setState({
            species: data.map(x => {
                const splitted = x.url.split("/");
                const id = splitted[splitted.length - 2];
                x.id = id;
                return x
            })
        })
    }
    render() {
        return this.state.species ? (
            <div>
                <h1 className="text-center">Species in the All Movies</h1>
                {this.state.species.map((specie, index) => (
                    <ul class="list-group text-center">
                        <Link to={"/SpecieDetails/" + specie.id} className="list-group-item list-group-item-action" lkey={index}> {specie.name} </Link>
                    </ul>
                ))}
            </div>
        )
            : (<div className="text-center">
                <h1><strong className="text-center">Species are loading...</strong></h1>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>)
    }
}

export default Species;