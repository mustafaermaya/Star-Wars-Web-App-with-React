import React from 'react'

class StarshipDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starship: null
        }
    }
    async componentDidMount() {
        const result = await fetch(`https://swapi.co/api/starships/${this.props.match.params.id}/`);
        const data = await result.json();
        this.setState({ starship: data });

    }
    render() {
        const starships = this.state.starship;
        return this.state.starship ? (
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">{starships.name}</h1>
                        <p class="lead text-muted"></p>
                        <p><strong>The model or official name of this starship:</strong> {starships.model}</p>
                        <p><strong>The class of this starship:</strong> {starships.starship_class}</p>
                        <p><strong>The manufacturer of this starship:</strong> {starships.manufacturer}</p>
                        <p><strong>The cost of this starship new, in galactic credits:</strong> {starships.cost_in_credits}</p>
                        <p><strong>The length of this starship in meters:</strong> {starships.length}</p>
                        <p><strong>The number of personnel needed to run or pilot this starship:</strong> {starships.crew}</p>
                        <p><strong>The number of non-essential people this starship can transport.:</strong> {starships.passengers}</p>
                        <p><strong>The maximum speed of this starship in the atmosphere:</strong> {starships.max_atmosphering_speed}<br></br>
                            <small>P.S: "N/A" if this starship is incapable of atmospheric flight.</small></p>
                        <p><strong>The class of this starships hyperdrive:</strong> {starships.hyperdrive_rating}</p>
                        <p><strong>The Maximum number of Megalights this starship can travel in a standard hour:</strong> {starships.MGLT} <br></br>
                            <small>P.S: A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
                                This figure is only really useful for measuring the difference in speed of starships.
                                We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.</small></p>
                        <p><strong>The maximum number of kilograms that this starship can transport:</strong> {starships.cargo_capacity}</p>
                        <p><strong>The maximum length of time that this starship can provide consumables for its entire crew without having to resupply:</strong> {starships.consumables}</p>

                    </div>
                </section>
            </div>
        ) : (<div className="text-center">
            <h1><strong className="text-center">Starship is loading...</strong></h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>)
    }
}

export default StarshipDetails;