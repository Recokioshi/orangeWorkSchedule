import './Calendar.css';
import { StyledComponentPropType } from "../Styles/Styles";

type CalendarPropsType = StyledComponentPropType & {
    someOtherProp: boolean,
}

const Calendar = (props: CalendarPropsType) => {
    return (
        <div className="calendar">
            <main className={props.classes.content}>

            </main>
        </div>
    );
}

export default Calendar;
