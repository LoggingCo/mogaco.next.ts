import * as Styled from './Style';

function DirectMessageChatFrom({ chat, from }: any) {
  return (
    <>
      <Styled.Name>{from.name}</Styled.Name>
      <Styled.Wrapper>
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
        <Styled.Time>{chat.createdAt}</Styled.Time>
      </Styled.Wrapper>
    </>
  );
}
export default DirectMessageChatFrom;
