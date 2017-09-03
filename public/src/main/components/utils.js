import React from 'react';
import Icon from 'material-ui/Icon';
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
            <div disabled data-tip data-for={tooltip}>
                <Icon>{icon}</Icon>
            </div>
        </IconButton>
        <span style={contentAfterIcon}>{prop}</span>
        <ReactTooltip id={tooltip} type="info">
            <span>{tooltip}</span>
        </ReactTooltip>
    </Typography>
);

const renderIconButton = (color, action, icon, disabledCondition) => (
    <IconButton
        color={color}
        onClick={action}
        disabled={disabledCondition}
    >
        <Icon>{icon}</Icon>
    </IconButton>
);

export default {
    renderDisabledIconTypography,
    renderIconButton,
};
