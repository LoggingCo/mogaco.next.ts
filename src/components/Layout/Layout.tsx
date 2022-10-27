import { useRouter } from 'next/router';
import * as Styled from './Style';

function Layout({ children }: any) {
  const { pathname } = useRouter();

  return (
    <>
      <Styled.Header>
        <Styled.Logo>Mogaco</Styled.Logo>
      </Styled.Header>
      {children}
    </>
  );
}
export default Layout;
