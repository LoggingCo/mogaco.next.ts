import * as Styled from './Style';

function DirectMessageChatTo({ chat }: any) {
  return (
    <Styled.Wrapper>
      <Styled.Time>{chat.createdAt}</Styled.Time>
      <Styled.Content>
        {chat.content.split('\n').map((word: string, index: number) => {
          return (
            <span key={index}>
              {word}
              <br />
            </span>
          );
        })}
      </Styled.Content>
    </Styled.Wrapper>
  );
}
export default DirectMessageChatTo;
