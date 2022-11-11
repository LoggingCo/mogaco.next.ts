import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from '@/libs/styles/common';

export const Wrapper = styled.div`
  position: fixed;
  min-width: 680px;
  max-width: 680px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #edece9;
`;

export const Header = styled.div`
  height: 32px;
  padding: 0 1rem;
  background-color: #e0e0e0;
  ${flexAlignCenter}
  justify-content: space-between;
`;

export const Container = styled.div`
  padding: 1rem;
  ${flexCenter};
  flex-direction: column;
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontSubColor};

  :hover {
    opacity: 0.7;
  }
`;
