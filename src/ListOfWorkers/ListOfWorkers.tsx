import React from 'react';
import './ListOfWorkers.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

type WorkerType = {
    id: number,
    firstName: string,
    lastName: string,
    color?: string,
}

type WorkerPropsType = {
    workerData: WorkerType,
}

type WorkerListPropsType = {
    workersData: WorkerType[],
}

const Worker = ({workerData}: WorkerPropsType) => {
    const name = `${workerData.firstName} ${workerData.lastName}`;
    const initials = getInitials(workerData);
    return (
        <ListItem button key={workerData.id}>
            <Avatar>{initials}</Avatar>
            <ListItemText primary={name} />
        </ListItem>  
    );
}

function getInitials({firstName, lastName}: WorkerType): string {
    const firstLetter = firstName.length > 0 ? firstName.substring(0, 1) : '';
    const secondLetter = lastName.length > 0 ? lastName.substring(0, 1) : '';
    return firstLetter + secondLetter;
}

export const ListOfWorkers = (props: WorkerListPropsType) => {
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
            {props.workersData.map((worker) => (
                <Worker workerData={worker}/>
            ))}
        </List>);
}

export function getWorkers(): WorkerType[] {
    return [
        {id: 1, firstName: "Patryk", lastName: "Sierżengowsky", color: "#58eb34"},
        {id: 2, firstName: "Adriano", lastName: "Gaikovsky", color: "#eb3434"},
        {id: 3, firstName: "Patrycyja", lastName: "Cierlikova", color: "#34ebe8"},
        {id: 4, firstName: "Kacperos", lastName: "Borkowsky", color: "#d934eb"},
    ];
}
