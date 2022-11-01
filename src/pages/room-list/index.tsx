import { editModal } from 'atom/modal/atoms';
import Modal from 'components/Common/Modal/Modal';
import RoomListHeader from 'components/Pages/room-list/Header/Header';
import RoomCardList from 'components/Pages/room-list/RoomList/List';
import RoomListSidebar from 'components/Pages/room-list/Sidebar';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

function RoomListPage() {
  const [isOpenEditModal, setIsOpenEditModal] = useRecoilState(editModal);

  return (
    <>
      {isOpenEditModal && <Modal type={'내 정보 수정'} setCloseModal={setIsOpenEditModal} />}
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
  min-width: 980px;
  max-width: 1440px;
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
