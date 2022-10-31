import dayjs from 'dayjs';
import { DirectData } from 'libs/mock/direct.data';
import { useState } from 'react';
import DirectMessageChatFrom from './ChatFrom/ChatFrom';
import DirectMessageChatTo from './ChatTo/ChatTo';
import DirectMessageChatForm from './Form/Form';
import * as Styled from './Style';

dayjs.locale('ko');
function DirectMessageChat() {
  const [chat, setChat] = useState(DirectData);

  return (
    <Styled.Wrapper>
      {chat.content.map((message, index) =>
        message.from ? (
          <DirectMessageChatFrom key={index} chat={message} from={chat.info} />
        ) : (
          <DirectMessageChatTo key={index} chat={message} />
        ),
      )}
      <DirectMessageChatForm />
    </Styled.Wrapper>
  );
}
export default DirectMessageChat;
