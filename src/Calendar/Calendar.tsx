import './Calendar.css';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

type CalendarPropsType = {
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

const Calendar = (props: CalendarPropsType) => {
    const classes = useStyles();
    return (
        <div className="calendar">
            <main className={classes.content}>
                
            </main>
        </div>
    );
}

export default Calendar;
