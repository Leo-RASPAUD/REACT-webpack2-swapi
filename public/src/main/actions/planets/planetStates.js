import { RECEIVE, REQUEST } from '../constants';

const planetStates = {
    REQUEST: {
        GET_ALL_PLANETS: `${REQUEST}GET_ALL_PLANETS`,
    },
    RECEIVE: {
        GET_ALL_PLANETS: `${RECEIVE}GET_ALL_PLANETS`,
    },
};

export default planetStates;
