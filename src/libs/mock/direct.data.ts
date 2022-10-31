import dayjs from 'dayjs';

dayjs.locale('ko');
export const DirectData = {
  info: {
    roomIdx: 3,
    level: 1,
    nick: '개발자01',
  },
  content: [
    {
      content: '안녕하세요. 반갑습니다 김성용이라고 합니다',
      createdAt: dayjs().format('A HH:mm'),
      read: 'Y',
    },
    {
      from: 'korpg95274',
      content: '네? 저도 이름이 김성용인데',
      createdAt: dayjs().format('A HH:mm'),
      read: 'Y',
    },
    {
      from: 'korpg95274',
      content: '이런 우연도 다 있네요 하하하',
      createdAt: dayjs().format('A HH:mm'),
      read: 'Y',
    },
    {
      content: '앗, 제 오타입니다. 저는 기성용입니다',
      createdAt: dayjs().format('A HH:mm'),
      read: 'Y',
    },
    {
      content: '그래도 정말 신기하군요 :)',
      createdAt: dayjs().format('A HH:mm'),
      read: 'Y',
    },
    {
      from: 'korpg95274',
      content: 'ㅡ,.ㅡ',
      createdAt: dayjs().format('A HH:mm'),
      read: 'Y',
    },
  ],
};
