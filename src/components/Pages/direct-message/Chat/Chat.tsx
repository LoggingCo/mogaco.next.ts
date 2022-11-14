import dayjs from 'dayjs';
import { DirectData } from '@mocks/data/direct.data';
import { useEffect, useRef, useState } from 'react';
import DirectMessageChatFrom from './ChatFrom/ChatFrom';
import DirectMessageChatTo from './ChatTo/ChatTo';
import DirectMessageChatForm from './Form/Form';
import * as Styled from './Style';

dayjs.locale('ko');
function DirectMessageChat() {
  const [chat, setChat] = useState(DirectData);
  const firstchatRef = useRef<HTMLDivElement>(null);
  const lastchatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastchatRef.current?.scrollIntoView();
  }, []);

  return (
    <Styled.Wrapper>
      <div ref={firstchatRef} style={{ height: '1rem' }} />
      {chat.content.map((message, index) =>
        message.from ? (
          <DirectMessageChatFrom key={index} chat={message} from={chat.info} />
        ) : (
          <DirectMessageChatTo key={index} chat={message} />
        ),
      )}
      <div ref={lastchatRef} style={{ height: '1rem' }} />
      <DirectMessageChatForm />
    </Styled.Wrapper>
  );
}
export default DirectMessageChat;
