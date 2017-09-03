import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PlanetDetail from '../../components/PlanetDetail/PlanetDetail.component';

const mapStateToProps = state =>
    ({
        details: state.planet.planetDetail,
    });


export default withRouter(connect(mapStateToProps, null)(PlanetDetail));
