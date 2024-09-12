import { Cell } from './cell';
import './day.css';
const getRandomEmpty = (prevEmpty: boolean) => {
  if (prevEmpty) return true;
  return Math.random() >= 0.5;
};

export const Day = () => {
  const cell7Empty = getRandomEmpty(false);
  const cell8Empty = getRandomEmpty(cell7Empty);
  const cell9Empty = getRandomEmpty(cell8Empty);

  return (
    <div className="day">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell empty={cell7Empty} />
      <Cell empty={cell8Empty} />
      <Cell empty={cell9Empty} />
    </div>
  );
};
