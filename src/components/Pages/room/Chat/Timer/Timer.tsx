import { useTimer } from '@/hooks/Common/useTimer';
import { parseTimerHour } from '@libs/utils/parseTimer';
import * as Styled from './Stlye';

function RoomTimer() {
  const [Timer, setTimer] = useTimer(0);

  return (
    <Styled.Timer>
      <span>{parseTimerHour(Timer as number)}</span>
    </Styled.Timer>
  );
}
export default RoomTimer;
