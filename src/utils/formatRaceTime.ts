export function formatRaceTime(time: number): string {
  const dateObj = new Date(time);
  const hour = dateObj.getUTCHours();
  let minute = dateObj.getUTCMinutes();
  const second = dateObj.getUTCSeconds();
  const millisecond = dateObj.getUTCMilliseconds();
  let temp = '';
  minute += hour * 60;

  temp += (minute < 10 ? '0' : '') + minute;
  temp += (second < 10 ? ':0' : ':') + second;
  temp +=
    (millisecond < 10 ? (millisecond < 100 ? '.00' : '.0') : '.') +
    millisecond;
  return temp;
}
