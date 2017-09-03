import React from 'react';
import PlanetList from '../../containers/PlanetList/PlanetList.container';
import PlanetDetail from '../../containers/PlanetDetail/PlanetDetail.container';

class Home extends React.Component {
    render() {
        return (
            <div className="display-flex-row">
                <PlanetList />
                <PlanetDetail />
            </div>
        );
    }
}

export default Home;
