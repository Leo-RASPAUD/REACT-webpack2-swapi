import React from 'react';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

const contentAfterIcon = {
    marginLeft: '10px',
    verticalAlign: 'super',
};

const renderDisabledIconTypography = (tooltip, icon, color, prop) => (
    <Typography>
        <IconButton color={color} disabled>
            <Icon>{icon}</Icon>
        </IconButton>
        <span style={contentAfterIcon}>{prop}</span>
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
