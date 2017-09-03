import React from 'react';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import GlobalStyle from './global.style';

const renderIcon = (tooltip, icon, color, prop) => (
    <Typography>
        <IconButton color={color} disabled>
            <Icon>{icon}</Icon>
        </IconButton>
        <span style={GlobalStyle.contentAfterIcon}>{prop}</span>
    </Typography>
);

export default renderIcon;
