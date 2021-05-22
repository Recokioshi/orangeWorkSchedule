import React from 'react';
import { Worker, WorkerType } from './Worker';
import './ListOfWorkers.css';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

type WorkerListPropsType = {
    workersData: WorkerType[],
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
                <Worker key={worker.id} workerData={worker} />
            ))}
        </List>);
}

export function getWorkers(): WorkerType[] {
    return [
        { id: 1, firstName: "Patryk", lastName: "Sierżengowsky", color: "#58eb34" },
        { id: 2, firstName: "Adriano", lastName: "Gaikovsky", color: "#eb3434" },
        { id: 3, firstName: "Patrycyja", lastName: "Cierlikova", color: "#34ebe8" },
        { id: 4, firstName: "Kacperos", lastName: "Borkowsky", color: "#d934eb" },
    ];
}
