import { parseLevel } from '@libs/utils/parseLevel';
import * as Styled from './Style';
function RoomSidebarUserList({ userList, master }: any) {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h1>참가자 목록</h1>
      </Styled.Header>
      <Styled.Container>
        <ul>
          {userList.map((user: any, index: number) => (
            <Styled.Item key={index}>
              <div>
                <span>{parseLevel(user.level)}</span>
                {user.name}
              </div>
              {master && <button>추방</button>}
            </Styled.Item>
          ))}
        </ul>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default RoomSidebarUserList;
