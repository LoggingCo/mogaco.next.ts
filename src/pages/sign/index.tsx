import LayoutHeader from '@/components/Layout/Header';
import SignLogin from '@/components/Pages/sigin/Login/Login';
import SignSignUp from '@/components/Pages/sigin/SiginUp/SiginUp';
import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter, logoheader } from '@/libs/styles/common';
import { withOutAuth } from '@/libs/utils/hoc';

function SignPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Styled.Wraaper>
      <Styled.Logo>
        <LayoutHeader />
        <Styled.Container>
          오늘도
          <br />
          모가코,
        </Styled.Container>
      </Styled.Logo>
      <Styled.Main>
        <Styled.MainHeader>
          <ul>
            <li onClick={() => setIsLogin(true)}>로그인</li>
            <li onClick={() => setIsLogin(false)}>회원가입</li>
          </ul>
        </Styled.MainHeader>
        {isLogin ? <SignLogin /> : <SignSignUp />}
      </Styled.Main>
    </Styled.Wraaper>
  );
}
export default withOutAuth(SignPage);

const Wraaper = styled.div`
  display: flex;
  height: 100vh;
`;

const Logo = styled.div`
  width: 520px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary[300]};
`;

const Header = styled.div`
  ${logoheader};
`;

const Container = styled.div`
  height: calc(100% - 48px);
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.2;
  font-size: 84px;
  ${flexCenter};
`;

const Main = styled.div`
  width: calc(100% - 520px);
`;

const MainHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 32px;

  & ul {
    display: flex;
    & li {
      margin: 0 8px;
      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.palette.primary[300]};
        transform: scale(1.1);
      }
    }
  }
`;

const Styled = {
  Wraaper,
  Logo,
  Header,
  Container,
  Main,
  MainHeader,
};
