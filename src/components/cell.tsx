import './cell.css';
function getRandomColor() {
  const colors = ['#FCB52E', '#E67232', '#882DFC', '#287EFE', '#FC6B6B', '#11BEB3'];
  return colors[Math.floor(Math.random() * colors.length)];
}
interface Params {
  empty?: boolean;
}
export const Cell = ({empty}: Params) => {
  return (
    <div className="cell">
      <div
        className="tag"
        style={{ background: empty ? '' : getRandomColor() }}></div>
      <div className="text-container">
        <div className="text">
          {empty ? '' : 'Pre-Competitive Recreational Program, whatever'}
        </div>
        <div className="time">{empty ? '': '5 pm - 8 pm'}</div>
      </div>
    </div>
  );
};
