import planetService from '../../services/planetService';
import state from './planetStateActions';

const loadPlanetDetail = planetUrl => (dispatch) => {
    dispatch(state.requestLoadPlanetDetail());
    return planetService.loadPlanetDetail(planetUrl)
        .then((data) => {
            if (data.status === 200) {
                return data.json();
            }
            return {};
        })
        .then((planetDetail) => {
            dispatch(state.receiveLoadPlanetDetail(planetDetail));
        });
};

const getPlanets = page => (dispatch) => {
    dispatch(state.requestGetAllPlanets());
    return planetService.getPlanets(page)
        .then((data) => {
            if (data.status === 200) {
                return data.json();
            }
            return { results: [] };
        })
        .then((planets) => {
            dispatch(state.receiveGetAllPlanets(planets));
        });
};

export default {
    getPlanets,
    loadPlanetDetail,
};
