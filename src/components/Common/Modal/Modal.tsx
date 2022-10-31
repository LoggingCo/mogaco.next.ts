import { BlackBackGround } from 'styles/common';
import MyMogacoModal from './edit-info/EditInfo';
import EditInfoModal from './my-mogaco/EditInfo';
import * as Styled from './Style';

function Modal({ type, setCloseModal }: any) {
  const onCloseModal = () => {
    setCloseModal(false);
  };

  return (
    <BlackBackGround>
      <Styled.Wrapper>
        <Styled.Header>
          <p>{type}</p>
          <button onClick={onCloseModal}>x</button>
        </Styled.Header>
        <Styled.Container>
          {type === 'edit-info' ? (
            <EditInfoModal />
          ) : type === 'my-mogaco' ? (
            <MyMogacoModal />
          ) : null}
        </Styled.Container>
      </Styled.Wrapper>
    </BlackBackGround>
  );
}
export default Modal;
