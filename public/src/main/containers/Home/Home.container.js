import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Home from '../../components/Home/Home.component';
import planetActions from '../../actions/planets/planetActions';

const mapDispatchToProps = dispatch =>
    ({
        getAllPlanets: () => dispatch(planetActions.getAllPlanets()),
    });

export default withRouter(connect(null, mapDispatchToProps)(Home));
