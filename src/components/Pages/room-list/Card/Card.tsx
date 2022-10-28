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
      {/* <Styled.Front>
        <Styled.FrontTitle>
          <span>{room.title}</span>
        </Styled.FrontTitle>
        <Styled.FrontDesc>{room.description}</Styled.FrontDesc>
        <Styled.FrontSetting>
          <p>{room.category}</p>
          현재 인원 <span>{room.currentMember} /</span> {room.maxMember} 명
        </Styled.FrontSetting>
      </Styled.Front> */}
    </Styled.Wrapper>
  );
}
export default RoomCard;
