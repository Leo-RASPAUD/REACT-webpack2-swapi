import planetStates from './planetStates';

const requestGetAllPlanets = () => ({
    type: planetStates.REQUEST.GET_ALL_PLANETS,
});

const receiveGetAllPlanets = planets => ({
    type: planetStates.RECEIVE.GET_ALL_PLANETS,
    planets,
});

const requestLoadPlanetDetail = () => ({
    type: planetStates.REQUEST.LOAD_PLANET_DETAIL,
});

const receiveLoadPlanetDetail = planetDetail => ({
    type: planetStates.RECEIVE.LOAD_PLANET_DETAIL,
    planetDetail,
});

export default {
    requestGetAllPlanets,
    receiveGetAllPlanets,
    requestLoadPlanetDetail,
    receiveLoadPlanetDetail,
};
