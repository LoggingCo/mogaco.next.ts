import Link from 'next/link';
import Sidebar from './Sidebar';
import * as Styled from './Style';

function FullLayout({ children }: any) {
  return (
    <>
      <Styled.Header>
        <Link href="/">
          <a>
            <Styled.Logo>Mogaco</Styled.Logo>
          </a>
        </Link>
      </Styled.Header>
      <Styled.Container>
        <Sidebar />
        {children}
      </Styled.Container>
    </>
  );
}
export default FullLayout;
