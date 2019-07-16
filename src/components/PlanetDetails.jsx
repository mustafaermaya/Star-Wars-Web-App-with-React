import React from 'react'

class PlanetDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            planet : null
        }
    }
    async componentDidMount(){
        const result = await fetch(`https://swapi.co/api/planets/${this.props.match.params.id}/`);
        const data = await result.json();
        this.setState({planet : data});
    }
    render() {
        const planets = this.state.planet;
        return this.state.planet ? (
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">{planets.name}</h1>
                        <p class="lead text-muted"></p>
                        <p><strong>The diameter of this planet in kilometers:</strong> {planets.diameter}</p>
                        <p><strong>The number of standard hours it takes for this planet to complete a single rotation on its axis:</strong> {planets.rotation_period}</p>
                        <p><strong>The number of standard days it takes for this planet to complete a single orbit of its local star:</strong> {planets.orbital_period}</p>
                        <p><strong>A number denoting the gravity of this planet:</strong> {planets.gravity}<br></br>
                        <small>P.S: where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.</small></p>
                        <p><strong>The average population of sentient beings inhabiting this planet:</strong> {planets.population}</p>
                        <p><strong>The climate of this planet:</strong> {planets.climate}<br></br>
                        <small>P.S : Comma separated if diverse.</small></p>
                        <p><strong>The terrain of this planet:</strong> {planets.terrain}<br></br>
                        <small>P.S: Comma separated if diverse</small></p>
                        <p><strong>The percentage of the planet surface that is naturally occurring water or bodies of water:</strong> {planets.surface_water}</p>
                    </div> 
                </section>
            </div>
        ) : (<div className="text-center">
            <h1><strong className="text-center">Planet Detail is loading...</strong></h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>)
    }
}

export default PlanetDetails;
