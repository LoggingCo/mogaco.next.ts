import * as Styled from './Stlye';
function RoomForm() {
  return (
    <>
      <Styled.Form>
        <input placeholder="# 일반에 메세지 보내기" />
        <button>전송</button>
      </Styled.Form>
      <Styled.Title>개발자님이 채팅 입력 중 입니다 ... </Styled.Title>
    </>
  );
}
export default RoomForm;
