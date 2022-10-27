import { useState } from 'react';
import * as Styled from './Style';

function RoomCard({ room }: any) {
  const [filp, setPilp] = useState(false);
  const onSetFilpTrue = () => {
    setTimeout(() => setPilp(true), 100);
  };

  const onSetFlipFalse = () => {
    setTimeout(() => setPilp(false), 100);
  };

  return (
    <Styled.Wrapper filp={filp} onMouseOver={onSetFilpTrue} onMouseLeave={onSetFlipFalse}>
      {!filp ? (
        <Styled.Front>
          <Styled.FrontTitle>
            <span>{room.title}</span>
          </Styled.FrontTitle>
          <Styled.FrontDesc>{room.description}</Styled.FrontDesc>
          <Styled.FrontSetting>
            <p>{room.category}</p>
            현재 인원 <span>{room.currentMember} /</span> {room.maxMember} 명
          </Styled.FrontSetting>
        </Styled.Front>
      ) : (
        <Styled.Back>
          <Styled.BackContent>
            <div>
              <p>총 코딩 시간</p>
              <p>total {room.totalhour}</p>
            </div>
            <div>
              <p>모임 시작일</p>
              <p>total {room.startDate}</p>
            </div>
            <div>
              <p>모임 유지 기간</p>
              <p>오늘로 128일 째</p>
            </div>
            <Styled.BackButton>입장</Styled.BackButton>
          </Styled.BackContent>
        </Styled.Back>
      )}
    </Styled.Wrapper>
  );
}
export default RoomCard;
