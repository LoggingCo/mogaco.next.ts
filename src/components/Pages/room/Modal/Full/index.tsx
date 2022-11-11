import { fullVideoModal } from '@/atom/modal/atoms';
import { useRecoilState } from 'recoil';
import FullRoomChat from './Chat/Chat';
import * as Styled from './Style';

function RoomFullVideoModal() {
  const [openState, setOpenState] = useRecoilState(fullVideoModal);

  const onCloseModalState = (e: any) => {
    e.stopPropagation();
    setOpenState(false);
  };

  return (
    <Styled.Wrapper isOpen={openState}>
      <Styled.Button onClick={onCloseModalState}>X</Styled.Button>
      <Styled.Container>
        <Styled.ViedoBox>
          <video />
        </Styled.ViedoBox>
        <FullRoomChat />
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default RoomFullVideoModal;
