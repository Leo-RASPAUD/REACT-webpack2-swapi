import React from 'react';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

const contentAfterIcon = {
    marginLeft: '10px',
    verticalAlign: 'super',
};

const renderDisabledIconTypography = (tooltip, icon, color, prop) => (
    <Typography>
        <IconButton color={color} >
            <div data-tip data-for={tooltip}>
                <Icon>{icon}</Icon>
            </div>
        </IconButton>
        <span style={contentAfterIcon}>{prop}</span>
        <ReactTooltip id={tooltip} type="info">
            <span>{tooltip}</span>
        </ReactTooltip>
    </Typography>
);

const renderIconButton = ({ tooltip, action, icon, condition }) => (
    <div>
        <IconButton
            onClick={action}
            disabled={condition}
        >
            <div data-tip data-for={tooltip}>
                <Icon>{icon}</Icon>
            </div>
        </IconButton>
        <ReactTooltip id={tooltip} type="info">
            <span>{tooltip}</span>
        </ReactTooltip>
    </div>
);

renderIconButton.propTypes = {
    tooltip: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
    icon: PropTypes.object.isRequired,
    condition: PropTypes.bool.isRequired,
};


export default {
    renderDisabledIconTypography,
    renderIconButton,
};
