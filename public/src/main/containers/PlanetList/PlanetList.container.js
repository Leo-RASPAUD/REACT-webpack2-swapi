import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PlanetList from '../../components/PlanetList/PlanetList.component';
import planetActions from '../../actions/planets/planetActions';

const mapDispatchToProps = dispatch =>
    ({
        getPlanets: page => dispatch(planetActions.getPlanets(page)),
        loadPlanetDetail: planetUrl => () => dispatch(planetActions.loadPlanetDetail(planetUrl)),
    });

const mapStateToProps = state =>
    ({
        planetState: state.planet,
    });


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlanetList));
