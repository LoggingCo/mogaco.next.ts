import useChatParse from 'hooks/Page/direct-message/useChatParse';
import { parseLevel } from 'libs/utils/parseLevel';
import * as Styled from './Style';

function DirectMessageUser({ user, limit }: any) {
  const { chat } = useChatParse(user.lastMessage, limit);

  return (
    <Styled.Wrapper key={user.name}>
      <Styled.Header>
        <Styled.User>
          <span> {parseLevel(user.level)}</span>
          {user.name}
        </Styled.User>
        <Styled.Status status={user.status}></Styled.Status>
      </Styled.Header>
      <Styled.Message>
        <Styled.LastMessage>{chat}</Styled.LastMessage>
        <span>{user.lastMessageTime}</span>
      </Styled.Message>
    </Styled.Wrapper>
  );
}
export default DirectMessageUser;
