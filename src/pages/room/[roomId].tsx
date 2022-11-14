import RoomChat from 'components/Pages/room/Chat';
import RoomFullVideoModal from 'components/Pages/room/Modal/Full';
import RoomSidebar from 'components/Pages/room/Sidebar';
import RoomVideoList from 'components/Pages/room/VideoList';
import styled from 'styled-components';
import { flexAlignCenter } from '@/libs/styles/common';
import { withAuth } from '@/libs/utils/hoc';

function MogacoRoomPage() {
  return (
    <Styled.Wrapper>
      <RoomFullVideoModal />
      <Styled.Header>
        <span>mogaco</span>
        <Styled.HeaderBuntton>메뉴</Styled.HeaderBuntton>
      </Styled.Header>
      <Styled.Container>
        <RoomSidebar />
        <RoomChat />
        <RoomVideoList />
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default withAuth(MogacoRoomPage);

const Wrapper = styled.div`
  min-width: 1440px;
`;
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
`;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
`;

const HeaderBuntton = styled.button`
  color: ${({ theme }) => theme.palette.fontSubColor};
  position: relative;

  & ul {
    position: absolute;
    width: 180px;
    padding: 0 16px;
    background-color: #fff;
    color: ${({ theme }) => theme.palette.fontColor};
    top: 32px;
    z-index: 300;
  }
`;

const Styled = {
  Wrapper,
  Header,
  HeaderBuntton,
  Container,
};
