import { parseLevel } from 'libs/utils/parseLevel';
import { useState } from 'react';
import * as Styled from './Style';
function RoomSidebarChannel({ channelList, master }: any) {
  const [userList, setUserList] = useState([
    {
      name: '김민지',
      level: 1,
    },
    {
      name: '김성용',
      level: 2,
    },
    {
      name: '김성용',
      level: 3,
    },
  ]);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h1>
          <span>열림</span>
          채널
        </h1>
        {master && <button>+</button>}
      </Styled.Header>
      <Styled.Container>
        <Styled.ChannlList>
          {channelList.map((channel: any) => (
            <>
              <Styled.ChannlItem>
                # {channel.name}
                {channel.primary === false && <span>x</span>}
              </Styled.ChannlItem>
              <Styled.UserList>
                {channel.primary === false &&
                  userList.map((user: any) => (
                    <Styled.UserItem>
                      <span>{parseLevel(user.level)}</span> {user.name}
                    </Styled.UserItem>
                  ))}
              </Styled.UserList>
            </>
          ))}
        </Styled.ChannlList>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default RoomSidebarChannel;
