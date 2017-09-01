import planetService from '../../services/planetService';
import state from './planetStateActions';

const getAllPlanets = () => (dispatch) => {
    dispatch(state.requestGetAllPlanets());
    return planetService.getAllPlanets()
        .then((data) => {
            if (data.status === 200) {
                return data.json();
            }
            return data;
        })
        .then((planets) => {
            dispatch(state.receiveGetAllPlanets(planets));
        });
};

export default {
    getAllPlanets,
};
