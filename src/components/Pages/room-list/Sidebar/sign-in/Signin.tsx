import Link from 'next/link';
import SideHeader from '../header/Header';
import * as Styled from './Style';

function SideSiginIn() {
  return (
    <>
      <SideHeader title={'로그인 / 회원가입'} style={{ borderRadius: '0 14px 0 0' }} />
      <Styled.Container>
        <Link href="/sign">
          <button>MOGACO, LOGIN</button>
        </Link>
      </Styled.Container>
    </>
  );
}
export default SideSiginIn;
