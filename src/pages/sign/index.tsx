import SignLogin from 'components/Pages/sigin/Login/Login';
import SignSignUp from 'components/Pages/sigin/SiginUp/SiginUp';
import { useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

function SignPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Styled.Wraaper>
      <Styled.Main>
        <Styled.Header>mogaco</Styled.Header>
        <Styled.Container>
          오늘도
          <br />
          모가코,
        </Styled.Container>
      </Styled.Main>
      <Styled.Form>
        <Styled.FormHeader>
          <ul>
            <li onClick={() => setIsLogin(true)}>로그인</li>
            <li onClick={() => setIsLogin(false)}>회원가입</li>
          </ul>
        </Styled.FormHeader>
        {isLogin ? <SignLogin /> : <SignSignUp />}
      </Styled.Form>
    </Styled.Wraaper>
  );
}
export default SignPage;

const Wraaper = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.div`
  width: 520px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary[300]};
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 3rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  cursor: pointer;
  ${flexAlignCenter};
`;

const Container = styled.div`
  height: calc(100% - 48px);
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.2;
  font-size: 84px;
  ${flexCenter};
`;

const Form = styled.form`
  width: calc(100% - 520px);
`;

const FormHeader = styled.div`
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
  Main,
  Header,
  Container,
  Form,
  FormHeader,
};
