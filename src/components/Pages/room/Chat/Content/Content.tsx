import { useChatList } from 'hooks/Page/room/useChatList';
import { roomChat } from 'libs/mock/room.data';
import { useState } from 'react';
import * as Styled from './Style';

function RoomContent() {
  const [roomInfo, setRoomInfo] = useState(roomChat);
  const [chatList, setChatList] = useChatList(roomInfo.chatList);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        {chatList.map((item: any, index: any) => (
          <div key={item.date}>
            <div>{item.date}</div>
            {item.chatList.map((chat: any, index: any) => (
              <div key={index}>:)</div>
            ))}
          </div>
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default RoomContent;
