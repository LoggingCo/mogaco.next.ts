import { useMemo, useState } from 'react';
import { parseLevel } from 'libs/utils/parseLevel';
import * as Styled from './Style';
import { useMedia } from 'hooks/Common/useMedia';
import DirectMessageUser from './User/User';
import { DirectUser } from 'libs/mock/direct.data';

function DirectMessageUserList() {
  const { isMobile } = useMedia();
  const [userList, setUserList] = useState(DirectUser);

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
