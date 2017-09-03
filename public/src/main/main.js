import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';

import swapiReact from './reducers/rootReducer';
import App from './containers/App/App.container';

import '../assets/materialIcons.css';
import '../assets/swapi-react.css';
import '../assets/stars.css';

const history = createHistory();
injectTapEventPlugin();

const composeFunctions = [
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routerMiddleware(history)),
    ...(process.env.NODE_ENV !== 'production' ?
        [window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()] :
        {}),
];

const store = createStore(
    swapiReact,
    compose(...composeFunctions),
);

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
