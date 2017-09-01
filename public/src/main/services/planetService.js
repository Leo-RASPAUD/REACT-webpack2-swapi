import fetchUrl from './utils';

const baseUrl = 'https://swapi.co/api/';

const getAllPlanets = () => {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetchUrl(`${baseUrl}planets`, params);
};

export default {
    getAllPlanets,
};
