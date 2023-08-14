import { DateTime } from './luxon.js';

const displayDate = () => {
  const current = DateTime.now;
  const dateContainer = document.getElementById('date');
  dateContainer.innerHTML = `${current.day}`;
};

export default displayDate;
