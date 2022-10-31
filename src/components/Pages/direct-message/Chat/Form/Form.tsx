import * as Styled from './Style';

function DirectMessageChatForm() {
  return (
    <Styled.Wrapper>
      <textarea placeholder="전송 할 메시지를 입력해주세요"></textarea>
      <button>전송</button>
    </Styled.Wrapper>
  );
}
export default DirectMessageChatForm;
