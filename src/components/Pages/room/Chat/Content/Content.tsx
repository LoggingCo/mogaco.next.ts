import { roomChat } from '@mocks/data/room.data';
import { useChatList } from 'hooks/Page/room/useChatList';
import { useEffect, useRef, useState } from 'react';
import RoomChatFrom from './ChatFrom/ChatFrom';
import RoomChatTo from './ChatTo/ChatTo';
import * as Styled from './Style';

function RoomContent() {
  // state
  const [roomInfo, setRoomInfo] = useState(roomChat);
  const [chatList, setChatList] = useChatList(roomInfo.chatList);
  const [scrollState, setScrollState] = useState(false);

  // chat ref
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const lastchatRef = useRef<HTMLDivElement>(null);

  // new chat scroll
  useEffect(() => {
    if (!scrollState) lastchatRef.current?.scrollIntoView();
  }, [chatList]);

  // scroll event
  const handleScroll = (e: any) => {
    if (e.target.scrollTop === 0) {
      console.log('top');
    } else if (e.target.scrollTop + e.target.clientHeight < e.target.scrollHeight - 50) {
      console.log('up');
      setScrollState(true);
    } else if (e.target.scrollTop + e.target.clientHeight > e.target.scrollHeight - 50) {
      console.log('down');
      setScrollState(false);
    }
  };

  // scroll observe event
  useEffect(() => {
    if (!chatBodyRef.current) return;
    chatBodyRef.current.addEventListener('scroll', handleScroll);
    return () => {
      if (!chatBodyRef.current) return;
      chatBodyRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Styled.Wrapper ref={chatBodyRef}>
      <Styled.Container>
        {chatList.map((item: any, index: any) => (
          <div key={item.date}>
            <Styled.Date>
              <p></p>
              <h1>{item.date}</h1>
              <p></p>
            </Styled.Date>
            {item.chatList.map((chat: any, index: any) => {
              if (chat.from) {
                return <RoomChatFrom key={index} chat={chat} />;
              } else {
                return <RoomChatTo key={index} chat={chat} />;
              }
            })}
          </div>
        ))}
        <div ref={lastchatRef} />
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default RoomContent;
