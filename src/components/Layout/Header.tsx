import Link from 'next/link';
import styled from 'styled-components';
import { logoheader } from '@/libs/styles/common';

function LayoutHeader() {
  return (
    <Styled.Header>
      <Link href={'/'}>mogaco</Link>
    </Styled.Header>
  );
}
export default LayoutHeader;

const Header = styled.div`
  ${logoheader};
`;

const Styled = {
  Header,
};
