import './calendar.css'
import {CalendarHeader} from './calendar-header'
import {WeeklyView} from './weekly-view'
export const Calendar = () => {
    return <div className="calendar">
        <CalendarHeader/>
        <WeeklyView/>
    </div>
}