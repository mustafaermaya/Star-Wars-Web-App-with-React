import React from 'react';
import Nav from './Nav';
import HomePage from '../pages/home';
import MoviesPage from '../pages/movies';
import PeoplePage from '../pages/people';
import PlanetsPage from '../pages/planets';
import SearchPage from '../pages/search';
import SpeciesPge from '../pages/species';
import StarshipsPage from '../pages/starships';
import VehiclesPage from '../pages/vehicles';
import FilmDetails from '../components/FilmDetails';
import CharacterDetails from '../components/CharacterDetails';
import PlanetDetails from '../components/PlanetDetails';
import SpecieDetails from '../components/SpecieDetails';
import StarshipDetails from '../components/StarshipDetails'
import VehicleDetails from '../components/VehicleDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends React.Component {
  constructor(props){
    super(props)
    this.style = {
      backgroundColor : '#f1f1f1'
    }
  }
  render() {
    return (
      <Router>
        <div className="App" style={this.style}>
        <Nav></Nav>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/movies" component={MoviesPage}></Route>
        <Route path="/people" component={PeoplePage}></Route>
        <Route path="/planets" component={PlanetsPage}></Route>
        <Route path="/search" component={SearchPage}></Route>
        <Route path="/species" component={SpeciesPge}></Route>
        <Route path="/starships" component={StarshipsPage}></Route>
        <Route path="/vehicles" component={VehiclesPage}></Route>
        <Route path="/FilmDetails/:id" component={FilmDetails}></Route>
        <Route path="/CharacterDetails/:id" component={CharacterDetails}></Route>
        <Route path="/PlanetDetails/:id" component={PlanetDetails}></Route>
        <Route path="/SpecieDetails/:id" component={SpecieDetails}></Route>
        <Route path="/StarshipDetails/:id" component={StarshipDetails}></Route>
        <Route path="/VehicleDetails/:id" component={VehicleDetails}></Route>
        </div>
      </Router>
    )
  }
}



export default App;
