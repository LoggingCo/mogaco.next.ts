import FullLayout from 'components/Layout/FullLayout';
import RoomCardList from 'components/Pages/room-list/List/List';
import RoomListSearch from 'components/Pages/room-list/Search/Search';
import { ReactElement } from 'react';
import styled from 'styled-components';

function RoomListPage() {
  return (
    <>
      <Styled.Wrapper>
        <Styled.Header>
          <Styled.Logo>Mogaco</Styled.Logo>
        </Styled.Header>
        <RoomListSearch />
        <Styled.Container>
          <RoomCardList />
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
}

RoomListPage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};

export default RoomListPage;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

const Header = styled.div`
  text-align: center;
`;

const Logo = styled.div`
  font-size: 60px;
  color: ${({ theme }) => theme.palette.primary[300]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Container = styled.div`
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
  Header,
  Logo,
  Container,
  Item,
};
