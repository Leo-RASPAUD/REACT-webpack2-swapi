/* eslint-disable indent */
import states from '../actions/planets/planetStates';

const planet = (state = {}, action) => {
    switch (action) {
        case states.RECEIVE.GET_ALL_PLANETS:
            return state;
        case states.REQUEST.GET_ALL_PLANETS:
            return {
                ...state,
                planets: action.planets,
            };
        default:
            return state;
    }
};

export default planet;
