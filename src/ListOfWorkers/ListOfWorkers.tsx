import React from 'react';
import './ListOfWorkers.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const ListOfWorkers = (props: any) => {

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Workers
            </ListSubheader>
            }
        >
            {['Patryk Sierżengowsky', 'Adriano Gaikowsky', 'Partycja Cierlikowa', 'Kacperos Borkowsky'].map((text) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>);
}

export default ListOfWorkers;