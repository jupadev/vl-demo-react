export function toISOString(date) {
  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  return date.getUTCFullYear() +
  '-' + pad(date.getUTCMonth() + 1) +
  '-' + pad(date.getUTCDate()) +
  'T' + pad(date.getUTCHours()) +
  ':' + pad(date.getUTCMinutes()) +
  ':' + pad(date.getUTCSeconds()) +
  '.' + (date.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
  'Z';
}