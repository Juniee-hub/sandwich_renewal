import moment from 'moment';

/**
 * @param {string} createdAt
 * @returns {string}
 */
export const dateMessage = createdAt => {
  let itemDateObj = moment(createdAt);
  let prevItemDate = itemDateObj.format('YYYY-MM-DD');
  let diff = moment(moment().format('YYYY-MM-DD')).diff(moment(prevItemDate), 'days');

  if (diff <= 1) {
    return `${itemDateObj.calendar().split(' ')[0]} ${itemDateObj.format('a h:mm')}`;
  }

  return itemDateObj.format('YYYY년 M월 D일 (ddd) a h:mm');
}
