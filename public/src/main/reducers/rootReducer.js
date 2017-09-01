import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import planet from './planetReducer';

const swapiReact = combineReducers(
    {
        router: routerReducer,
        planet,
    });

export default swapiReact;
