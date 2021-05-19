import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = {
    color: string;
}

const useStyles = makeStyles<Theme, StyleProps>(theme => ({
        avatar: {
            backgroundColor: props => props.color,
            margin: theme.spacing(1),
        },
    }),
);

export type WorkerType = {
    id: number,
    firstName: string,
    lastName: string,
    color: string,
}

export type WorkerPropsType = {
    key: number,
    workerData: WorkerType,
}

export const Worker = ({ workerData }: WorkerPropsType) => {
    const props = { color: workerData.color };
    const classes = useStyles(props);

    const name = `${workerData.firstName} ${workerData.lastName}`;
    const initials = getInitials(workerData);

    return (
        <ListItem button key={workerData.id}>
            <Avatar className={classes.avatar}>{initials}</Avatar>
            <ListItemText primary={name} />
        </ListItem>
    );
}

export function getInitials({ firstName, lastName }: WorkerType): string {
    const firstLetter = firstName.length > 0 ? firstName.substring(0, 1) : '';
    const secondLetter = lastName.length > 0 ? lastName.substring(0, 1) : '';
    return firstLetter + secondLetter;
}