import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import swapiReact from './reducers/rootReducer';
import App from './containers/App/App.container';

import '../assets/materialIcons.css';
import '../assets/swapi-react.css';

const history = createHistory();

const composeFunctions = [
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routerMiddleware(history)),
    ...([window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()]),
];

const store = createStore(
    swapiReact,
    compose(...composeFunctions),
);

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
