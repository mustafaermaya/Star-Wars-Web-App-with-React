import React from 'react';

class CharacterDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            character: null
        }
    }
    async componentDidMount() {
        const result = await fetch(`https://swapi.co/api/people/${this.props.match.params.id}/`)
        const data = await result.json();
        this.setState({ character: data });
    }
    render() {
        const characters = this.state.character;
        return this.state.character ? (
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">{characters.name}</h1>
                        <p class="lead text-muted"></p>
                        <p><strong>The birth year of the person:</strong> {characters.birth_year}<br></br>
                            <small>P.S: using the in-universe standard of BBY or ABY - Before the Battle of Yavin or
                            After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.</small></p>
                        <p><strong> The eye color of this person:</strong> {characters.eye_color}<br></br>
                        <small>P.S: Will be "unknown" if not known or "n/a" if the person does not have an eye.</small></p>
                        <p><strong>The gender of this person:</strong> {characters.gender}<br></br>
                        <small>P.S: Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.</small></p>
                        <p><strong>The hair color of this person:</strong> {characters.hair_color}<br></br>
                        <small>P.S: Will be "unknown" if not known or "n/a" if the person does not have hair.</small></p>
                        <p><strong>The height of the person in centimeters:</strong> {characters.height}</p>
                        <p><strong>The mass of the person in kilograms:</strong> {characters.mass}</p>
                        <p><strong>The skin color of this person:</strong> {characters.skin_color}</p>
                    </div>
                </section>
            </div>
        ) : (<div className="text-center">
            <h1><strong className="text-center">Character Detail is loading...</strong></h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>)
    }
}

export default CharacterDetails;