import { useMemo, useState } from 'react';
import { parseLevel } from 'libs/utils/parseLevel';
import * as Styled from './Style';
import { useMedia } from 'hooks/Comoon/useMedia';
import DirectMessageUser from './User/User';

function DirectMessageUserList() {
  const { isMobile } = useMedia();
  const [userList, setUserList] = useState([
    {
      name: '개발자01',
      level: 2,
      status: 'online',
      lastMessage: '안녕하세요',
      lastMessageTime: '오후 3:00',
    },
    {
      name: '개발자02',
      level: 1,
      status: 'online',
      lastMessage:
        '안녕하세요. 혹시 모임 가입 떄문에 연락드렸습니다. 모임 비밀번호를 알 수 있을까요',
      lastMessageTime: '오후 3:00',
    },
    {
      name: '개발자03',
      level: 1,
      status: 'online',
      lastMessage: '안녕하세요',
      lastMessageTime: '오후 3:00',
    },
  ]);

  // text limit
  const textLimit = useMemo(() => {
    return isMobile ? 10 : 30;
  }, [isMobile]);

  return (
    <Styled.Wrapper>
      <ul>
        {userList.map((user) => (
          <DirectMessageUser key={user.name} user={user} limit={textLimit} />
        ))}
      </ul>
    </Styled.Wrapper>
  );
}
export default DirectMessageUserList;
