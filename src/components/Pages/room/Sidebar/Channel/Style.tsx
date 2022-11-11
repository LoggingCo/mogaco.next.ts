import styled from 'styled-components';
import { flexAlignCenter } from '@/libs/styles/common';

export const Wrapper = styled.div`
  max-height: 50%;
  background-color: #f4e9e7;
  overflow: hidden;
  position: relative;
`;

export const Header = styled.div`
  height: 48px;
  padding: 0 16px;
  ${flexAlignCenter};
  justify-content: space-between;

  & h1 {
    color: #636161;
    & span {
      color: ${({ theme }) => theme.palette.fontColor};
      margin-right: 8px;
      font-size: 12px;
      cursor: pointer;
    }
  }

  & button {
    color: ${({ theme }) => theme.palette.fontColor};
  }
`;

export const Container = styled.div`
  height: calc(50vh - 84px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChannlList = styled.ul`
  color: ${({ theme }) => theme.palette.fontColor};
  padding-left: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const ChannlItem = styled.li`
  margin: 28px 0;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  ${flexAlignCenter};
  justify-content: space-between;
  padding-right: 32px;

  & span {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const UserList = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding-left: 2rem;
`;
export const UserItem = styled.li`
  ${flexAlignCenter};
  margin: 10px 0;
  & > span {
    margin-right: 16px;
  }
`;
