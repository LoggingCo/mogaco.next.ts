import { useChatList } from 'hooks/Page/room/useChatList';
import { roomChat } from 'libs/mock/room.data';
import { useState } from 'react';
import RoomChatFrom from './ChatFrom/ChatFrom';
import RoomChatTo from './ChatTo/ChatTo';
import * as Styled from './Style';

function RoomContent() {
  const [roomInfo, setRoomInfo] = useState(roomChat);
  const [chatList, setChatList] = useChatList(roomInfo.chatList);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        {chatList.map((item: any, index: any) => (
          <div key={item.date}>
            <Styled.Date>
              <p></p>
              <h1>{item.date}</h1>
              <p></p>
            </Styled.Date>
            {item.chatList.map((chat: any, index: any) =>
              chat.from ? <RoomChatFrom chat={chat} /> : <RoomChatTo chat={chat} />,
            )}
          </div>
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default RoomContent;
