import { useState } from 'react';
import * as Styled from './Stlye';
import EditinfoUserTable from './UserTable/UserTable';

function EditModalMogaco({ mogaco, index }: any) {
  const [isOpenTalbe, setIsOpenTalbe] = useState(false);

  const onOpenTable = () => {
    setIsOpenTalbe((prev) => !prev);
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Name index={index}>
          <span></span>
          {mogaco.name}
        </Styled.Name>
        <Styled.Info>
          <p>
            <span>랭킹</span> {mogaco.rank}위
          </p>
          <p>
            <span>인원</span> {mogaco.currentMember} / {mogaco.maxMember}
          </p>
          <p>
            <span>D</span>+ {mogaco.day}
          </p>
        </Styled.Info>
        <Styled.ButtonGroup>
          <button>모임탈퇴</button>
          <button onClick={onOpenTable}>
            팀원목록 <span>{isOpenTalbe ? '-' : '+'}</span>
          </button>
          <button>참여하기</button>
        </Styled.ButtonGroup>
      </Styled.Wrapper>
      {isOpenTalbe && <EditinfoUserTable data={mogaco.userList} master={mogaco.master} />}
    </>
  );
}
export default EditModalMogaco;
