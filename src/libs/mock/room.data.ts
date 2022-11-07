import dayjs from 'dayjs';

dayjs.locale('ko');
export const roomData = {
  master: true,
  roomName: '개발자 모임',
  channelList: [
    {
      roomId: 'abcd',
      name: '일반',
      primary: true,
    },
    {
      roomId: 'abcd',
      name: '프론트엔드',
      primary: false,
    },
    {
      roomId: 'abcd',
      name: '백엔드',
      primary: false,
    },
  ],
  userList: [
    {
      name: '개발자01',
      level: 1,
    },
    {
      name: '개발자02',
      level: 2,
    },
    {
      name: '개발자03',
      level: 3,
    },
  ],
};

export const roomChat = {
  roomId: 'abcd',
  chatList: [
    {
      content: '안녕하세요. 반갑습니다 김성용이라고 합니다',
      createdAt: dayjs().subtract(2, 'day').format(),
      name: '개발자01',
      level: 3,
    },
    {
      content: '네? 저도 이름이 김성용인데',
      createdAt: dayjs().subtract(2, 'day').format(),
    },
    {
      content: '이런 우연도 다 있네요 하하하',
      createdAt: dayjs().subtract(1, 'day').format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '앗, 제 오타입니다. 저는 기성용입니다',
      createdAt: dayjs().subtract(1, 'day').format(),
    },
    {
      content: '그래도 정말 신기하군요 :)',
      createdAt: dayjs().subtract(1, 'day').format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: 'ㅡ,.ㅡ',
      createdAt: dayjs().subtract(1, 'day').format(),
    },
    {
      content: '안녕하세요. 반갑습니다 김성용이라고 합니다',
      createdAt: dayjs().subtract(2, 'day').format(),
    },
    {
      content: '네? 저도 이름이 김성용인데',
      createdAt: dayjs().subtract(1, 'day').format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '이런 우연도 다 있네요 하하하',
      createdAt: dayjs().subtract(1, 'day').format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '앗, 제 오타입니다. 저는 기성용입니다',
      createdAt: dayjs().subtract(1, 'day').format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '그래도 정말 신기하군요 :)',
      createdAt: dayjs().subtract(1, 'day').format(),
    },
    {
      content: 'ㅡ,.ㅡ',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '안녕하세요. 반갑습니다 김성용이라고 합니다',
      createdAt: dayjs().format(),
    },
    {
      content: '네? 저도 이름이 김성용인데',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '이런 우연도 다 있네요 하하하',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '앗, 제 오타입니다. 저는 기성용입니다',
      createdAt: dayjs().format(),
    },
    {
      content: '그래도 정말 신기하군요 :)',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: 'ㅡ,.ㅡ',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '안녕하세요. 반갑습니다 김성용이라고 합니다',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '네? 저도 이름이 김성용인데',
      createdAt: dayjs().format(),
    },
    {
      content: '이런 우연도 다 있네요 하하하',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '앗, 제 오타입니다. 저는 기성용입니다',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: '그래도 정말 신기하군요 :)',
      createdAt: dayjs().format(),
    },
    {
      content: 'ㅡ,.ㅡ',
      createdAt: dayjs().format(),
      name: '개발자03',
      level: 3,
    },
    {
      content: 'ㅡ,.ㅡ',
      createdAt: dayjs().format(),
    },
  ],
};
