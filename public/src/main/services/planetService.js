import fetchUrl from './utils';

const baseUrl = 'https://swapi.co/api/';
const getFetchParams = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

const loadPlanetDetail = planetUrl => fetchUrl(planetUrl, getFetchParams);
const getPlanets = page => fetchUrl(`${baseUrl}planets/?page=${page}`, getFetchParams);

export default {
    getPlanets,
    loadPlanetDetail,
};
