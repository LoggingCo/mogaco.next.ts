import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';

export const useTimer = (
  time = 0,
  Operator = 'plus',
  stop = true,
): Array<number | Dispatch<SetStateAction<number>> | any> => {
  const [Timer, setTimer] = useState<number>(time);
  const timer = useRef<any>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (Operator === 'plus') {
        setTimer(Timer + 1);
      } else if (Operator === 'minus') {
        setTimer(Timer - 1);
      }
    }, 1000);
    return () => clearInterval(timer.current);
  }, [Timer]);

  const onStopTimer = () => {
    clearInterval(timer.current);
  };

  return [Timer, setTimer as Dispatch<SetStateAction<number>>, onStopTimer];
};
