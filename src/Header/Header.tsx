import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

type HeaderPropsType = {
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            'background-color': '#ff5e00',
        },
    })
);

const Header = (props: HeaderPropsType) => {
    const classes = useStyles();
    return (
        <div className="header">
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" noWrap>
                    Orange Work Schedule
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
