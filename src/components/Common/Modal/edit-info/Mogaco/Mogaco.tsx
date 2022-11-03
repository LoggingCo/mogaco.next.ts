import * as Styled from './Stlye';

function EditModalMogaco({ mogaco, index }: any) {
  return (
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
        <button>팀원목록</button>
        <button>코딩하러가기</button>
      </Styled.ButtonGroup>
    </Styled.Wrapper>
  );
}
export default EditModalMogaco;
