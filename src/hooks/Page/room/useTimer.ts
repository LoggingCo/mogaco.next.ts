import { useState, useEffect } from 'react';

export const useTimer = (time = 0) => {
  const [Timer, setTimer] = useState(time);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(Timer + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [Timer]);

  return [Timer, setTimer];
};
