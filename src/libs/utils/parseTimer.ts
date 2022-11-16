export const parseTimerHour = (timer: number) => {
  const minute = Math.floor(timer / 60);
  const hour = Math.floor(minute / 60);

  const minuteString = minute % 60 < 10 ? `0${minute % 60}` : `${minute % 60}`;
  const hourString = hour < 10 ? `0${hour}` : `${hour}`;

  return `${hourString}:${minuteString}`;
};

export const parseTimerMinute = (timer: number) => {
  const m = Math.floor(timer / 60).toString();
  let s = (timer % 60).toString();
  if (s.length === 1) s = `0${s}`;

  return `${m}:${s}`;
};
