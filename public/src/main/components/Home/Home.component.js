import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {

    constructor() {
        super();
        this.renderPlanets = this.renderPlanets.bind(this);
        this.state = {};
        this.state.planets = { results: ['toto'] };
    }

    componentDidMount() {
        const { getAllPlanets } = this.props;
        getAllPlanets().then((planets) => {
            console.log(planets);
            this.setState({ planets: { results: ['tata'] } });
            console.log('ici', this.state);
        });
    }

    renderPlanets() {
        if (this.state && this.state.planets) {
            console.log(this.state);
            return this.state.planets.results.map(planet =>
                (<li>
                    {planet.name}
                </li>),
            );
        }
        return (<div>kikoo</div>);
    }

    render() {
        return (
            <ul>
                {this.renderPlanets()}
            </ul>
        );
    }
}

Home.propTypes = {
    getAllPlanets: PropTypes.func.isRequired,
};


export default Home;
