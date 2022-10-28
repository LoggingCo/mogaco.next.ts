import RoomListHeader from 'components/Pages/room-list/Header/Header';
import RoomCardList from 'components/Pages/room-list/List/List';
import RoomListSidebar from 'components/Pages/room-list/Sidebar';
import styled from 'styled-components';

function RoomListPage() {
  return (
    <>
      <Styled.Wrapper>
        <RoomListHeader />
        <Styled.Container>
          <RoomListSidebar />
          <Styled.Content>
            <RoomCardList />
          </Styled.Content>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
}
export default RoomListPage;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 1440px;
  padding-top: 1rem;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  height: 300px;
`;

const Styled = {
  Wrapper,
  Content,
  Container,
  Item,
};
