import React from 'react';
import './Params.css';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { ListOfWorkers, getWorkers } from '../ListOfWorkers/ListOfWorkers';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles } from '@material-ui/core/styles';

type ParamsPropsType = {
};

const drawerWidth = 240;
const useStyles = makeStyles(
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
    })
);

const MockedDrawerList = () => {
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Parameters
      </ListSubheader>
            }
        >
            {['Hours per day', 'Kamehameha', 'Universe is on fire!!!'].map((text) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    );
}

const Params = (props: ParamsPropsType) => {
    const classes = useStyles();
    const workersData = getWorkers();
    return (
        <div className="params">
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <ListOfWorkers workersData={workersData} />
                    <Divider />
                    <MockedDrawerList />
                </div>
            </Drawer>
        </div>
    );
}

export default Params;