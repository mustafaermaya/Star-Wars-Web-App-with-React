import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Home: "/",
            Movies: "/movies",
            People: "/people",
            Planets: "/planets",
            Species: "/species",
            Starships: "/starships",
            Vehicles: "/vehicles",
            Search: "/search"
        }
    }
    render() {
        return (
            <div>
                <nav classNameName="site-header sticky-top py-1">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <h5 className="py-2">
                            Star Wars
                        </h5>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.Home}>Home</Link>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.Movies}>Movies</Link>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.People}>People</Link>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.Planets}>Planets</Link>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.Species}>Species</Link>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.Starships}>Starships</Link>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.Vehicles}>Vehicles</Link>
                        <Link className="py-2 d-none d-md-inline-block" to={this.state.Search}>Search</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;