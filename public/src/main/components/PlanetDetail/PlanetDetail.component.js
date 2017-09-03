import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class PlanetDetail extends React.Component {

    constructor() {
        super();
        this.renderCard = this.renderCard.bind(this);
    }

    renderCard() {
        return (<Card>
            <CardHeader
                title={this.props.details.name}
                subtitle={this.props.details.name}
            />
            <CardText>
                Planet detail
        </CardText>
        </Card>);
    }

    render() {
        return (
            <div>
                {this.props.details ? this.renderCard() : null}
            </div>
        );
    }
}

PlanetDetail.propTypes = {
    details: PropTypes.object.isRequired,
};


export default PlanetDetail;
