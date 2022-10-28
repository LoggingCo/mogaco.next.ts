import { useState } from 'react';
import RoomListHeadeSibebar from './Sidebar/Sildebar';
import * as Styled from './Style';

function RoomListHeader() {
  const [isOpenFormModal, setIsOpenFormModal] = useState(false);

  const onOpenFormModal = (e: any) => {
    e.preventDefault();
    setIsOpenFormModal(true);
  };

  return (
    <Styled.Wrapper>
      <Styled.Header>mogaco</Styled.Header>
      <Styled.Container>
        <Styled.Logo>오늘도 모가코 ,</Styled.Logo>
        <Styled.Form>
          <Styled.InputBox>
            <p>
              <input placeholder="모임 이름 입력 (최대 10자)" />
            </p>
            <p>
              <input placeholder="암호 입력" />
            </p>
          </Styled.InputBox>
          <button onClick={onOpenFormModal}>mogaco</button>
        </Styled.Form>
      </Styled.Container>
      <RoomListHeadeSibebar
        isOpenFormModal={isOpenFormModal}
        setIsOpenFormModal={setIsOpenFormModal}
      />
    </Styled.Wrapper>
  );
}
export default RoomListHeader;
