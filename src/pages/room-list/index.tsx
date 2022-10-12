import RoomCardList from './components/List/List';
import RoomListSearch from './components/Search/Search';
import * as Styled from './Style';

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
export default RoomListPage;
