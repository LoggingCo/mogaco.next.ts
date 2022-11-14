import Link from 'next/link';
import styled from 'styled-components';
import { logoheader } from '@/libs/styles/common';
import LogOutBtn from './Logout/LogoutBtn';

function LayoutHeader() {
  return (
    <Styled.Header>
      <Link href={'/'}>mogaco</Link>
      <LogOutBtn />
    </Styled.Header>
  );
}
export default LayoutHeader;

const Header = styled.div`
  ${logoheader};
  justify-content: space-between;
`;

const Styled = {
  Header,
};
