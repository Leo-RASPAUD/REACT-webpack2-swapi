/* eslint-disable indent */
import states from '../actions/planets/planetStates';

const planet = (state = {}, action) => {
    switch (action.type) {
        case states.RECEIVE.GET_ALL_PLANETS:
            return {
                ...state,
                data: action.planets,
            };
            case states.RECEIVE.LOAD_PLANET_DETAIL:
            return {
                ...state,
                planetDetail: action.planetDetail,
                loading: false,
            };
        case states.REQUEST.LOAD_PLANET_DETAIL:
            return {
                ...state,
                planetDetail: null,
                loading: true,
            };
        case states.REQUEST.GET_ALL_PLANETS:
            return state;
        default:
            return state;
    }
};

export default planet;
