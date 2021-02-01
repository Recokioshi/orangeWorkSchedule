import React from 'react';
import ReactDOM from 'react-dom';
import './Calendar.css';

const Calendar = (props: any) => {
    return (
        <div className="calendar">
            <main className={props.classes.content}>

            </main>
        </div>
    );
}

export default Calendar;