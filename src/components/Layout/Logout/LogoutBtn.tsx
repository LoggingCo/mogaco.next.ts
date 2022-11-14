import ApiError from '@/apis/error';
import TokenRepository from '@/repository/TokenRepository';
import UserRepository from '@/repository/UserRepositroy';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function LogOutBtn() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const onLogout = () => {
    axios.post('/api/user/logout').then((res) => {
      if (res.status === 200) {
        TokenRepository.removeToken();
        UserRepository.removeUser();
        setIsLogin(false);

        const { pathname } = router;
        if (pathname === '/room-list') {
          return router.reload();
        }
        router.push('/room-list');
      }
    });
  };

  useEffect(() => {
    setIsLogin(TokenRepository.getToken() ? true : false);
  }, []);

  return isLogin ? <Styled.Button onClick={onLogout}>LOGOUT</Styled.Button> : null;
}
export default LogOutBtn;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.palette.fontSubColor};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.palette.fontColor};
  }
`;

const Styled = {
  Button,
};
