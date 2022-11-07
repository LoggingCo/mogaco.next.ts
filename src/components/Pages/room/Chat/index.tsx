import * as Styled from './Style';
import RoomTimer from './Timer/Timer';
import RoomContent from './Content/Content';
import RoomForm from './Form/Form';

function RoomChat() {
  return (
    <Styled.Wrapper>
      <RoomTimer />
      <RoomContent />
      <RoomForm />
    </Styled.Wrapper>
  );
}
export default RoomChat;
