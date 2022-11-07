import { parseTimer } from 'libs/utils/parseTimer';
import { useEffect, useState } from 'react';
import * as Styled from './Stlye';

function RoomTimer() {
  const [Timer, setTimer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(Timer + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [Timer]);

  return (
    <Styled.Timer>
      <span>{parseTimer(Timer)}</span>
    </Styled.Timer>
  );
}
export default RoomTimer;
