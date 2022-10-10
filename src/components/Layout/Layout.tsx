import Sidebar from 'components/Sidebar';
import useSideOpen from 'hooks/useSideOpen';
import { useRouter } from 'next/router';
import * as Styled from './Style';

function Layout({ children }: any) {
  const { pathname } = useRouter();
  const { sideOpen, setSideOpen } = useSideOpen(pathname);

  return (
    <>
      <Styled.Header>
        <Sidebar />
        <Styled.Logo>Mogaco</Styled.Logo>
      </Styled.Header>
      {children}
    </>
  );
}
export default Layout;
