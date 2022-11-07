import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

dayjs.locale('ko');
export const useChatList = (roomChat: any) => {
  const [chatList, setChatList] = useState<any>([]);

  useEffect(() => {
    if (roomChat.length < 0) return;
    const chatList_copy = [...chatList];

    for (const chat of roomChat) {
      const date = dayjs(chat.createdAt).format('YY년 MM월 DD일');
      chatList_copy.push({ date, chatList: [] });
    }

    const chatList_copy2 = chatList_copy.filter((chat, index) => {
      return (
        chatList_copy.findIndex((chat2: any, index: any) => chat2.date === chat.date) === index
      );
    });

    for (const chat of roomChat) {
      chatList_copy2.map((day: any) => {
        if (day.date === dayjs(chat.createdAt).format('YY년 MM월 DD일')) {
          day.chatList.push(chat);
        }
      });
    }

    chatList_copy2.sort((a: any, b: any) => {
      return dayjs(b.date).unix() - dayjs(a.date).unix();
    });

    setChatList(chatList_copy2);
  }, [roomChat]);

  return [chatList, setChatList];
};
