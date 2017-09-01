import planetStates from './planetStates';

const requestGetAllPlanets = () => ({
    type: planetStates.REQUEST.GET_ALL_PLANETS,
});

const receiveGetAllPlanets = planets => ({
    type: planetStates.RECEIVE.GET_ALL_PLANETS,
    planets,
});

export default {
    requestGetAllPlanets,
    receiveGetAllPlanets,
};
