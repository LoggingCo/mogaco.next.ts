export const parseTimer = (timer: number) => {
  const minute = Math.floor(timer / 60);
  const hour = Math.floor(minute / 60);

  const minuteString = minute % 60 < 10 ? `0${minute % 60}` : `${minute % 60}`;
  const hourString = hour < 10 ? `0${hour}` : `${hour}`;

  return `${hourString}:${minuteString}`;
};
