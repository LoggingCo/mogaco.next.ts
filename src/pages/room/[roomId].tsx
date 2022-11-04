import RoomChat from 'components/Pages/room/Chat';
import RoomSidebar from 'components/Pages/room/Sidebar';
import RoomVideo from 'components/Pages/room/VideoList';

import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

function MogacoRoomPage() {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <span>mogaco</span>
        <button>메뉴</button>
      </Styled.Header>
      <Styled.Container>
        <RoomSidebar />
        <RoomChat />
        <RoomVideo />
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default MogacoRoomPage;

const Wrapper = styled.div``;
const Header = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontSubColor};
  padding-left: 2rem;
  padding-right: 25%;

  & span {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    cursor: pointer;
  }

  & button {
    color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
`;

const Styled = {
  Wrapper,
  Header,
  Container,
};
