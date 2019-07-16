import React from 'react'

class VehicleDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicle: null
        }
    }
    async componentDidMount() {
        const result = await fetch(`https://swapi.co/api/vehicles/${this.props.match.params.id}/`);
        const data = await result.json();
        this.setState({ vehicle: data });
    }
    render() {
        const vehicles = this.state.vehicle;
        return this.state.vehicle ? (
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">{vehicles.name}</h1>
                        <p class="lead text-muted"></p>
                        <p><strong>The model or official name of this vehicle:</strong> {vehicles.model}</p>
                        <p><strong>The class of this vehicle:</strong> {vehicles.vehicle_class}</p>
                        <p><strong>The manufacturer of this vehicle:</strong> {vehicles.manufacturer}</p>
                        <p><strong>The length of this vehicle in meters:</strong> {vehicles.length }</p>
                        <p><strong>The cost of this vehicle new, in Galactic Credits:</strong> {vehicles.cost_in_credits}</p>
                        <p><strong>The number of personnel needed to run or pilot this vehicle:</strong> {vehicles.crew}</p>
                        <p><strong>The number of non-essential people this vehicle can transport:</strong> {vehicles.passengers}</p>
                        <p><strong>The maximum speed of this vehicle in the atmosphere:</strong> {vehicles.max_atmosphering_speed}</p>
                        <p><strong>The maximum number of kilograms that this vehicle can transport:</strong> {vehicles.cargo_capacity}</p>
                        <p><strong>The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply:</strong> {vehicles.consumables}</p>
                    </div>
                </section>
            </div>
        ) : (<div className="text-center">
            <h1><strong className="text-center">Vehicle Detail is loading...</strong></h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>)
    }
}

export default VehicleDetails;