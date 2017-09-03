import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import PlanetDetailStyle from './PlanetDetail.style';
import utils from '../utils';

class PlanetDetail extends React.Component {

    constructor() {
        super();
        this.renderCard = this.renderCard.bind(this);
    }

    renderCard() {
        const noContentYet =
            (<Card style={PlanetDetailStyle.noContentCard}>
                <CardContent>
                    <Typography type="headline" component="h2">
                        <Icon color="accent">info_outline</Icon>
                        <span style={PlanetDetailStyle.moreInformations}>
                            Click on a planet to display more informations
                        </span>
                    </Typography>
                </CardContent>
            </Card>);

        return (
            this.props.details ?
                <Card style={PlanetDetailStyle.cardStyle}>
                    <CardContent>
                        <Typography type="headline" component="h4">
                            <Icon color="accent">stars</Icon>
                            <span style={{ marginLeft: '5px' }}>{this.props.details.name}</span>
                        </Typography>
                        <Typography component="h5">
                            {`${this.props.details.diameter} km`}
                        </Typography>
                        {utils.renderDisabledIconTypography('Climate', 'cloud_queue', 'accent', this.props.details.climate)}
                        {utils.renderDisabledIconTypography('Population', 'accessibility', 'accent', this.props.details.population)}
                        {utils.renderDisabledIconTypography('Terrain', 'landscape', 'accent', this.props.details.terrain)}
                        {utils.renderDisabledIconTypography('Orbital period', 'query_builder', 'accent', this.props.details.orbital_period)}
                    </CardContent>
                </Card> : noContentYet);
    }

    render() {
        return (
            <div style={PlanetDetailStyle.detailWrapper}>
                {this.props.loading ? (<CircularProgress color="accent" size={100} />) : this.renderCard()}
            </div>
        );
    }
}

PlanetDetail.defaultProps = {
    details: null,
    loading: false,
};

PlanetDetail.propTypes = {
    details: PropTypes.object,
    loading: PropTypes.bool,
};


export default PlanetDetail;
