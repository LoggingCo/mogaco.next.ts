import { useEffect, useRef } from 'react';
import * as Styled from './Style';

function RoomVideo({ user }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!user.stream) return;
    if (!videoRef.current) return;
    videoRef.current.srcObject = user.stream;
  }, [user.stream]);

  return (
    <Styled.Wrapper>
      {user.stream ? <video ref={videoRef}></video> : <p>{user.name}</p>}
      <Styled.ButtonGroup>
        <button>음</button>
        <button>화</button>
        <button>비</button>
      </Styled.ButtonGroup>
    </Styled.Wrapper>
  );
}
export default RoomVideo;
