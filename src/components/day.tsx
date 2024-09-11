import { Cell } from './cell';
import { DayHeader } from './day-header';
import './day.css';

export const Day = () => {
  return (
    <div className="day">
      <DayHeader />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell empty/>
      <Cell empty/>
      <Cell empty/>
      <Cell empty/>
    </div>
  );
};
