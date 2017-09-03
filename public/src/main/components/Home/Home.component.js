import React from 'react';
import PlanetList from '../../containers/PlanetList/PlanetList.container';
import PlanetDetail from '../../containers/PlanetDetail/PlanetDetail.container';

const style = {
    display: 'flex',
    flexDirection: 'row',
};

class Home extends React.Component {
    render() {
        return (
            <div style={style}>
                <PlanetList />
                <PlanetDetail />
            </div>
        );
    }
}

export default Home;
