import { RECEIVE, REQUEST } from '../constants';

const planetStates = {
    REQUEST: {
        GET_ALL_PLANETS: `${REQUEST}GET_ALL_PLANETS`,
        LOAD_PLANET_DETAIL: `${REQUEST}LOAD_PLANET_DETAIL`,
    },
    RECEIVE: {
        GET_ALL_PLANETS: `${RECEIVE}GET_ALL_PLANETS`,
        LOAD_PLANET_DETAIL: `${RECEIVE}LOAD_PLANET_DETAIL`,
    },
};

export default planetStates;
