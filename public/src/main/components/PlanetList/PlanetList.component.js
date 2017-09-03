import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';
import { blue500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PlanetListStyle from './PlanetList.style';

class PlanetList extends React.Component {

    constructor() {
        super();
        this.state = {
            page: 1,
            loading: true,
        };
        this.getNextPage = this.getNextPage.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.getPreviousPage = this.getPreviousPage.bind(this);
        this.loadPlanets = this.loadPlanets.bind(this);
    }

    componentDidMount() {
        this.loadPlanets();
    }

    setLoading(isLoading) {
        this.loading = isLoading;
    }

    getNextPage() {
        this.state.page += 1;
        this.loadPlanets();
    }

    getPreviousPage() {
        this.state.page -= 1;
        this.loadPlanets();
    }

    loadPlanets() {
        const { getPlanets } = this.props;
        this.state.loading = true;
        this.forceUpdate();
        getPlanets(this.state.page).then(() => {
            this.state.loading = false;
            this.forceUpdate();
        });
    }

    renderPlanets() {
        const { planetState } = this.props;
        const leftIcon = <i className="material-icons" style={PlanetListStyle.iconStyle}>star</i>;
        let listItem;
        if (planetState.data) {
            listItem = planetState.data.results.map(planet =>
                <ListItem
                    style={PlanetListStyle.listStyle}
                    key={planet.name}
                    primaryText={planet.name}
                    leftIcon={leftIcon}
                    onClick={this.props.loadPlanetDetail(planet.url)}
                />,
            );
        }
        return (
            <div style={PlanetListStyle.planetListStyle}>
                <List>
                    {listItem}
                </List>
            </div>
        );
    }

    render() {
        return (
            <div style={PlanetListStyle.circularProgress}>
                <div className="display-flex-row">
                    <IconButton
                        tooltip="Previous page"
                        color={blue500}
                        onClick={this.getPreviousPage}
                        disabled={this.state.page === 1}
                    >
                        <FontIcon className="material-icons">navigate_before</FontIcon>
                    </IconButton>
                    <IconButton
                        tooltip="Get more!"
                        color={blue500}
                        onClick={this.getNextPage}
                    >
                        <FontIcon className="material-icons">navigate_next</FontIcon>
                    </IconButton>
                    {this.state.loading ? <span style={PlanetListStyle.circularProgress}><CircularProgress size={30} /></span> : null}
                </div>
                <ul>
                    {this.renderPlanets()}
                </ul>
            </div>
        );
    }
}

PlanetList.propTypes = {
    getPlanets: PropTypes.func.isRequired,
    loadPlanetDetail: PropTypes.func.isRequired,
    planetState: PropTypes.object.isRequired,
};


export default PlanetList;
