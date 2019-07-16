import React from 'react';

class SpecieDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            specie: null
        }
    }
    async componentDidMount(){
        const result = await fetch(`https://swapi.co/api/species/${this.props.match.params.id}`);
        const data = await result.json();
        this.setState({specie : data});
    }
    render() {
        const species = this.state.specie;
        return this.state.specie? (
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">{species.name}</h1>
                        <p class="lead text-muted"></p>
                        <p><strong>The classification of this species:</strong> {species.classification}</p>
                        <p><strong>The designation of this species:</strong> {species.designation}</p>
                        <p><strong>The average height of this species in centimeters:</strong> {species.average_height}</p>
                        <p><strong>The average lifespan of this species in years:</strong> {species.average_lifespan}</p>
                        <p><strong>A comma-separated string of common eye colors for this species:</strong> {species.eye_colors}<br></br>
                        <small>P.S: "none" if this species does not typically have eyes.</small></p>
                        <p><strong>A comma-separated string of common hair colors for this species:</strong> {species.hair_colors}<br></br>
                        <small>P.S: "none" if this species does not typically have hair.</small></p>
                        <p><strong>A comma-separated string of common skin colors for this species:</strong> {species.skin_colors}<br></br>
                        <small>P.S: "none" if this species does not typically have skin.</small></p>
                        <p><strong>The language commonly spoken by this species:</strong> {species.language}</p>
                    </div> 
                </section>
            </div>
        ) : (<div className="text-center">
            <h1><strong className="text-center">Species Detail is loading...</strong></h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>)
    }
}

export default  SpecieDetails;