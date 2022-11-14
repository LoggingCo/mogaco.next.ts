import { useState } from 'react';
import RoomCard from './Card/Card';
import SkeletonCard from '../SkeletonCard/Skelton';
import * as Styled from './Style';
import { RoomListData } from '@mocks/data/roomList.data';

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
