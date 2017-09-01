import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home/Home.container';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default App;
