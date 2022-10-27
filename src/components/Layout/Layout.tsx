import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Styled from './Style';

function Layout({ children }: any) {
  const { pathname } = useRouter();

  return (
    <>
      <Styled.Header>
        <Link href="/">
          <a>
            <Styled.Logo>Mogaco</Styled.Logo>
          </a>
        </Link>
      </Styled.Header>
      {children}
    </>
  );
}
export default Layout;
