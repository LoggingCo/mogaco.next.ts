import styled from 'styled-components';
import { flexAlignCenter } from '@/libs/styles/common';

export const Header = styled.header`
  ${flexAlignCenter};
  justify-content: space-between;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.primary[200]};
  padding: 0 3rem;

  & button {
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.palette.fontSubColor};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.palette.fontColor};
    }
  }
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.fontSubColor};
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
