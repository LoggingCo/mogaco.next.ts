import Link from 'next/link';
import LogOutBtn from './Logout/LogoutBtn';
import * as Styled from './Style';

function Layout({ children }: any) {
  return (
    <>
      <Styled.Header>
        <Link href="/">
          <a>
            <Styled.Logo>Mogaco</Styled.Logo>
          </a>
        </Link>
        <LogOutBtn />
      </Styled.Header>
      {children}
    </>
  );
}
export default Layout;
