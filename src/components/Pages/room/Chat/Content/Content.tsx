import { roomChat } from 'libs/mock/room.data';
import { useEffect, useState } from 'react';
import * as Styled from './Style';

function RoomContent() {
  const [chatList, setChatList] = useState([]);
  const [roomInfo, setRoomInfo] = useState(roomChat);

  useEffect(() => {
    if (!chatList) return;
    roomInfo.chatList.sort((a: any, b: any) => a.createdAt - b.createdAt);
    console.log(roomInfo.chatList);
  }, [chatList]);

  return <Styled.Wrapper></Styled.Wrapper>;
}
export default RoomContent;
