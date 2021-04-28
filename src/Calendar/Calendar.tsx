import './Calendar.css';
import {useState, ChangeEvent} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Toolbar from '@material-ui/core/Toolbar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

type CalendarPropsType = {
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        calendarSelect: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

export const Calendar = (props: CalendarPropsType) => {
    const classes = useStyles();

    return (
        <div className="calendar">
            <main className={classes.content}>
                <Toolbar />
                <CalendarMonthSelect className={classes.calendarSelect}/>
                <CalendarYearSelect className={classes.calendarSelect}/>
            </main>
        </div>
    );
}

type CalendarMonthSelectPropsType = {
    className: string
};
const CalendarMonthSelect = (props: CalendarMonthSelectPropsType) => {
    const currentMonth = (new Date()).getMonth();
    const [month, setMonth] = useState(String(currentMonth));

    const handleMonthChange = (event: ChangeEvent<{ value: unknown }>) => {
        setMonth(event.target.value as string);
    };

    const selectItems = months.map((m, i) => (
        <MenuItem key={m} value={i}>{m}</MenuItem>
    ))
    return (
        <CalendarSelect
            currentValue={month}
            changeHandler={handleMonthChange}
            className={props.className}
            selectName={'Month'}
            selectItems={selectItems}
        />
    );
}

type CalendarYearSelectPropsType = {
    className: string
};
const CalendarYearSelect = (props: CalendarYearSelectPropsType) => {
    const currentYear = (new Date()).getFullYear();
    const [year, setYear] = useState(String(currentYear));
    
    const years = [currentYear - 1, currentYear, currentYear + 1];
    const yearsString = years.map((y) => String(y));

    const handleYearChange = (event: ChangeEvent<{ value: unknown }>) => {
        setYear(event.target.value as string);  
    };

    const selectItems = yearsString.map((y) => (
        <MenuItem key={y} value={y}>{y}</MenuItem>
    ));
    return (
        <CalendarSelect
            currentValue={year}
            changeHandler={handleYearChange}
            className={props.className}
            selectName={'Year'}
            selectItems={selectItems}
        />
    );
}

type CalendarSelectPropsType = {
    currentValue: string,
    changeHandler: (event: ChangeEvent<{ value: unknown }>) => void,
    className: string,
    selectName: string,
    selectItems: JSX.Element[]
}
const CalendarSelect = (props: CalendarSelectPropsType) => {
    const labelId = `select-label-${props.selectName}`;
    const selectId = `select-${props.selectName}`;
    return (
        <FormControl className={props.className}>
            <InputLabel id={labelId}>{props.selectName}</InputLabel>
            <Select
                labelId={labelId}
                id={selectId}
                value={props.currentValue}
                onChange={props.changeHandler}
            >
                {props.selectItems}
            </Select>
        </FormControl>
    );
}

export default Calendar;