import * as Styled from './Style';
import RoomTimer from './Timer/Timer';
import RoomContent from './Content/Content';

function RoomChat() {
  return (
    <Styled.Wrapper>
      <RoomTimer />
      <RoomContent />
    </Styled.Wrapper>
  );
}
export default RoomChat;
