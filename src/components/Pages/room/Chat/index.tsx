import { useEffect, useState } from 'react';
import * as Styled from './Style';

function RoomChat() {
  const [chatList, setChatList] = useState([]);
  const [Timer, setTimer] = useState(0);

  useEffect(() => {
    console.log(chatList);
  }, [chatList]);

  return (
    <Styled.Wrapper>
      <Styled.Header>:)</Styled.Header>
    </Styled.Wrapper>
  );
}
export default RoomChat;
