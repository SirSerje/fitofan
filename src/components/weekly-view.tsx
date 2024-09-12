import { Day } from './day'
import { DayHeader } from './day-header'
import './weekly-view.css'

export const WeeklyView =() => {
    return <>
    <div className='day-header-container'>
    <DayHeader/>
    <DayHeader/>
    <DayHeader/>
    <DayHeader/>
    <DayHeader/>
    <DayHeader/>
    <DayHeader/>
    </div>
    <div className='weekly-view'>
        
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day current/>
        <Day/>
        <Day/>
    </div></>
}