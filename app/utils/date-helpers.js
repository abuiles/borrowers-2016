import { format as borrowersDate } from 'borrowers-dates';

function formatDate(date, format) {
  return borrowersDate(date, format);
}

export {
  formatDate
};
