import Sidebar from '../Sidebar';
import * as Styled from './Style';

function Layout({ children }: any) {
  return (
    <>
      <Styled.Header>
        <Styled.Logo>Mogaco</Styled.Logo>
      </Styled.Header>
      <Styled.Container>
        <Sidebar />
        {children}
      </Styled.Container>
    </>
  );
}
export default Layout;
