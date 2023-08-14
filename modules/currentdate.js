import { DateTime } from './luxon.js';

const displayDate = () => {
  const current = DateTime.now();
  const dateContainer = document.getElementById('date');
  const formattedDate = current.toFormat('dd/MM/yyyy, hh:mm:ss');
  dateContainer.innerHTML = formattedDate;
};

displayDate();

setInterval(displayDate, 1000);

export default displayDate;
