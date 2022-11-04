import { roomData } from 'libs/mock/room.data';
import { useState } from 'react';
import RoomSidebarChannel from './Channel';
import RoomSidebarUserList from './UserList';
import * as Styled from './Style';

function RoomSidebar() {
  const [roomInfo, setRoomInfo] = useState(roomData);

  return (
    <Styled.Wrapper>
      <RoomSidebarChannel channelList={roomInfo.channelList} master={roomInfo.master} />
      <RoomSidebarUserList userList={roomInfo.userList} master={roomInfo.master} />
    </Styled.Wrapper>
  );
}
export default RoomSidebar;
