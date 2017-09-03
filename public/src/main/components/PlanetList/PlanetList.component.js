import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import PlanetListStyle from './PlanetList.style';
import utils from '../utils';

const styles = theme => ({
    root: {
        background: theme.palette.background.paper,
    },
});

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
        const { planetState, classes } = this.props;
        let listItems;
        if (planetState.data) {
            listItems = planetState.data.results.map(planet =>
                <ListItem button key={planet.name} onClick={this.props.loadPlanetDetail(planet.url)}>
                    <ListItemIcon>
                        <Icon color="accent">star</Icon>
                    </ListItemIcon>
                    <ListItemText primary={planet.name} />
                </ListItem>,
            );
        }
        return (
            <div style={PlanetListStyle.planetListStyle} className={classes.root}>
                <List>
                    {listItems}
                </List>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="display-flex-row">
                    {utils.renderIconButton({
                        tooltip: 'Previous page',
                        action: this.getPreviousPage,
                        icon: 'navigate_before',
                        condition: this.state.page === 1 || this.state.loading,
                    })}
                    <span style={{ lineHeight: '46px', color: 'white' }}>Page {this.state.page}</span>
                    {utils.renderIconButton({
                        tooltip: 'Next page',
                        action: this.getNextPage,
                        icon: 'navigate_next',
                        condition: this.state.loading,
                    })}
                    {this.state.loading ? <CircularProgress size={45} color="accent" /> : null}
                </div>
                {this.renderPlanets()}
            </div>
        );
    }
}

PlanetList.propTypes = {
    getPlanets: PropTypes.func.isRequired,
    loadPlanetDetail: PropTypes.func.isRequired,
    planetState: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(PlanetList);
