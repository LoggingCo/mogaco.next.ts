import SideHeader from '../header/Header';
import * as Styled from './Style';

function SideSiginIn() {
  return (
    <>
      <SideHeader title={'로그인'} style={{ borderRadius: '0 14px 0 0' }} />
      <Styled.Container>
        <Styled.Input placeholder="email" />
        <Styled.Input placeholder="password" />
        <Styled.ButtonGroup>
          <button>로그인</button>
          {'/'}
          <button>회원가입</button>
        </Styled.ButtonGroup>
      </Styled.Container>
    </>
  );
}
export default SideSiginIn;
