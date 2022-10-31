import { useState } from 'react';
import RoomCard from './Card/Card';
import SkeletonCard from '../SkeletonCard/Skelton';
import { RoomListData } from 'libs/mock/roomList.data';
import * as Styled from './Style';

function RoomCardList() {
  const [roomList, setRoomList] = useState(RoomListData);

  return (
    <Styled.Wrapper>
      {roomList.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
      <SkeletonCard />
    </Styled.Wrapper>
  );
}
export default RoomCardList;
