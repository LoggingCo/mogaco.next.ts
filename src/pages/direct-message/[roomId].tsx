import Layout from '@components/Layout/Layout';
import DirectMessageChat from '@components/Pages/direct-message/Chat/Chat';
import DirectMessageUserList from '@components/Pages/direct-message/UserList/UserList';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { flexCenter } from '@libs/styles/common';
import { withAuth } from '@libs/utils/hoc';

function DirectMessagePage() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <DirectMessageUserList />
        <DirectMessageChat />
      </Styled.Container>
    </Styled.Wrapper>
  );
}

DirectMessagePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default withAuth(DirectMessagePage);

const Wrapper = styled.div`
  ${flexCenter};
  height: calc(100vh - 60px);
  padding: 64px;
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  height: 100%;
`;

const Styled = {
  Wrapper,
  Container,
};
