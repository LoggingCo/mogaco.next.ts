import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Wrapper = styled.div`
  min-height: 50%;
  max-height: 50%;
  background-color: #edece9;
`;

export const Header = styled.div`
  height: 48px;
  padding: 0 16px;
  ${flexAlignCenter};
  background-color: ${({ theme }) => theme.palette.primary[200]};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const Container = styled.div`
  height: calc(50vh - 84px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 8px 32px;
  :hover {
    background-color: ${({ theme }) => theme.palette.primary[100]};
  }

  & span {
    margin-right: 8px;
  }

  & button {
    color: ${({ theme }) => theme.palette.fontSubColor};
    background-color: ${({ theme }) => theme.palette.primary[300]};
    padding: 4px;
    font-size: ${({ theme }) => theme.fontSize.small};
    :hover {
      opacity: 0.7;
    }
  }
`;
