import { fullVideoModal } from '@/atom/modal/atoms';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import * as Styled from './Style';

function RoomVideo({ user }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openState, setOpenState] = useRecoilState(fullVideoModal);

  useEffect(() => {
    if (!user.stream) return;
    if (!videoRef.current) return;
    videoRef.current.srcObject = user.stream;
  }, [user.stream]);

  const onOpenFullVideoModal = (e: any) => {
    e.stopPropagation();
    setOpenState(true);
  };

  const onCLickBublue = (e: any) => {
    e.stopPropagation();
    console.log('test');
  };

  return (
    <Styled.Wrapper onClick={onOpenFullVideoModal}>
      {user.stream ? <video ref={videoRef}></video> : <p>{user.name}</p>}
      <Styled.ButtonGroup>
        <button onClick={onCLickBublue}>음</button>
        <button>화</button>
        <button>비</button>
      </Styled.ButtonGroup>
    </Styled.Wrapper>
  );
}
export default RoomVideo;
