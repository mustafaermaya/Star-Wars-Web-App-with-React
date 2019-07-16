import React from 'react';
import { Link } from 'react-router-dom'
class Starships extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starships: null,
        }
    }
    async componentDidMount() {
        let data = [];
        const mainResult = await fetch("https://swapi.co/api/starships/");
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
            starships: data.map(x => {
                const splitted = x.url.split("/");
                const id = splitted[splitted.length - 2];
                x.id = id;
                return x
            })
        })
    }
    render() {
        return this.state.starships ? (
            <div>
                <h1 className="text-center">Starships in the All Movies</h1>
                {this.state.starships.map((starship, index) => (
                    <ul class="list-group text-center">
                        <Link to={"/StarshipDetails/" + starship.id} className="list-group-item list-group-item-action" key={index}> {starship.name} </Link>
                    </ul>
                ))}
            </div>
        )
            : (<div className="text-center">
                <h1><strong className="text-center">Starships are loading...</strong></h1>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>)
    }
}
export default Starships;
