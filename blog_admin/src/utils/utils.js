export function timetrans(time) {
  const date = new Date(time);
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} `;
  // var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  // var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  // var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D;
}

export const color = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

export function getDateDiff(dateTimeStamp) {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  let result;
  if (monthC >= 1) {
    result = `${parseInt(monthC, 10)}月前`;
  } else if (weekC >= 1) {
    result = `${parseInt(weekC, 10)}周前`;
  } else if (dayC >= 1) {
    result = `${parseInt(dayC, 10)}天前`;
  } else if (hourC >= 1) {
    result = `${parseInt(hourC, 10)}小时前`;
  } else if (minC >= 1) {
    result = `${parseInt(minC, 10)}分钟前`;
  } else { result = '刚刚'; }
  return result;
}
