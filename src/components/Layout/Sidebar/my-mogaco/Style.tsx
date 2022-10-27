import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Container = styled.div`
  padding: 16px;
  ${flexCenter}
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;

export const Mogaco = styled.ul`
  width: 95%;
  margin: 0 auto;

  & p {
    ${flexCenter}
  }

  & p > span {
    display: inline-block;
    margin-right: 8px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }

  & li:first-child {
    & > p > span {
      background-color: ${({ theme }) => theme.palette.yellow};
    }
  }

  & li:first-child {
    & > p > span {
      background-color: ${({ theme }) => theme.palette.yellow};
    }
  }

  & li:nth-of-type(2) {
    & > p > span {
      background-color: ${({ theme }) => theme.palette.puple};
    }
  }

  & li:last-child {
    & > p > span {
      background-color: ${({ theme }) => theme.palette.sky};
    }
  }

  & div {
    ${flexCenter}
  }

  & div > span {
    display: inline-block;
    margin-right: 8px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #222222;
  }
`;

export const List = styled.li`
  ${flexCenter};
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.palette.fontColor};
  margin: 14px 0;
`;
