import React from 'react'
import { Link } from 'react-router-dom'
class Vehicles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: null
        }
    }
    async componentDidMount() {
        let data = [];
        const mainResult = await fetch('https://swapi.co/api/vehicles/');
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
            vehicles: data.map(x => {
                const splitted = x.url.split("/");
                const id = splitted[splitted.length - 2];
                x.id = id;
                return x
            })
        })
    }
    render() {
        return this.state.vehicles ? (
            <div>
                <h1 className="text-center">Vehicles Page</h1>
                {this.state.vehicles.map(vehicle =>
                    <ul class="list-group text-center">
                        <Link to={"/VehicleDetails/" + vehicle.id} className="list-group-item list-group-item-action">{vehicle.name}</Link>
                    </ul>
                )}

            </div>
        )
            : (<div className="text-center">
                <h1><strong className="text-center">Vehicles are loading...</strong></h1>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>)
    }
}

export default Vehicles;