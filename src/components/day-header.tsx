import './day-header.css'
interface Props {
  current?: boolean;
}
export const DayHeader = ({current}: Props) => {
  return (
    <div className="day-header">
      <span className="week-day">Tue</span>
      <div
      className={current?'current-day':''}>26</div>
    </div>
  );
};
