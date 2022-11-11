import { roomUser } from '@/atom/room/atoms';
import { division } from '@/libs/utils/division';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as Styled from './Style';
import RoomVideo from './Video/Video';

function RoomVideoList() {
  const roomUserList = useRecoilValue(roomUser);
  const [divisonUserList, setDivisionUserList] = useState<any>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roomUserList.length < 0) return;
    setDivisionUserList(division(4, roomUserList));
  }, [roomUserList]);

  const onClickNext = () => {
    if (index === divisonUserList.length - 1) return;
    setIndex(index + 1);
  };

  const onClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  return (
    <Styled.Wrapper>
      {index > 0 && <button onClick={onClickPrev}>PREV</button>}
      {divisonUserList.length > 0 &&
        divisonUserList[index].map((user: any) => <RoomVideo user={user} />)}
      {index < divisonUserList.length - 1 && <button onClick={onClickNext}>NEXT</button>}
    </Styled.Wrapper>
  );
}
export default RoomVideoList;
