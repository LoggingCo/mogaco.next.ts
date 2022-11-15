import { useTimer } from '@hooks/Page/room/useTimer';
import { parseTimer } from '@libs/utils/parseTimer';
import * as Styled from './Stlye';

function RoomTimer() {
  const [Timer, setTimer] = useTimer(0);

  return (
    <Styled.Timer>
      <span>{parseTimer(Timer as number)}</span>
    </Styled.Timer>
  );
}
export default RoomTimer;
