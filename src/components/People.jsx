import React from 'react';
import { Link } from 'react-router-dom';

class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            people: null
        }

    }
    async componentDidMount() {
        let data = [];
        const mainResult = await fetch("https://swapi.co/api/people/");
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
        data.map(x => {
            const splitted = x.url.split("/");
            const id = splitted[splitted.length - 2];
            x.id = id;
            return x;
        });

        this.setState({
            people: data
        });
    }
    render() {
        return this.state.people ? (
            <div>
                <h3 className="text-center">Characters in the All Movies</h3>
                {this.state.people.map((people, index) => (
                    <ul class="list-group text-center">
                        <Link to={"/CharacterDetails/" + people.id} className="list-group-item list-group-item-action" key={index}> {people.name} </Link>
                    </ul>
                ))}
            </div>
        )
            : (<div className="text-center">
                <h1><strong className="text-center">People are loading...</strong></h1>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>)
    }

}

export default People;