import { useEffect, useState } from 'react';

const useChatParse = (lastChat: string, limit: number) => {
  const [chat, setChat] = useState(lastChat);

  useEffect(() => {
    if (lastChat) {
      if (lastChat.length > limit) {
        setChat(lastChat.slice(0, limit) + '...');
      } else {
        setChat(lastChat);
      }
    } else return;
  }, [chat, limit]);

  return { chat, setChat };
};
export default useChatParse;
