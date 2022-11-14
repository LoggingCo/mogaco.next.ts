import Link from 'next/link';
import { ReactElement, useEffect } from 'react';
import LogOutBtn from './Logout/LogoutBtn';
import * as Styled from './Style';

interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps) {
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
