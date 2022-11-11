import { ModalBackGround } from '@/libs/styles/common';
import MyMogacoModal from './edit-info/EditInfo';
import * as Styled from './Style';

function Modal({ type, setCloseModal }: any) {
  const onCloseModal = () => {
    setCloseModal(false);
  };

  return (
    <ModalBackGround>
      <Styled.Wrapper>
        <Styled.Header>
          <p>{type}</p>
          <button onClick={onCloseModal}>x</button>
        </Styled.Header>
        <Styled.Container>
          {type === '내 정보 수정' && <MyMogacoModal />}
          <Styled.Button onClick={onCloseModal}>APPLY</Styled.Button>
        </Styled.Container>
      </Styled.Wrapper>
    </ModalBackGround>
  );
}
export default Modal;
