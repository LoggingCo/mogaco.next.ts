import styled from 'styled-components';
import { flexAlignCenter } from '@/libs/styles/common';

export const Wrapper = styled.div`
  & > h1 {
    color: #ffb2b2;
    font-size: 24px;
  }
  margin: 32px;
`;

export const List = styled.ul`
  margin: 20px;
`;
export const Item = styled.li`
  color: #999;
  margin: 16px;
  padding-left: 3rem;
  font-size: ${({ theme }) => theme.fontSize.large};

  & span {
    display: inline-block;
    cursor: pointer;
  }

  & span:hover {
    color: #000;
    transform: scale(1.1);
  }
`;

export const Form = styled.form`
  ${flexAlignCenter};
  & > input {
    width: 80%;
    height: 40px;
    background-color: #fff;
    padding: 0 1rem;
    border-radius: 16px 0 0 16px;
  }

  & > button {
    width: 20%;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.primary[100]};
  }
`;

export const Categroy = styled.div`
  margin: 20px 0;

  & span {
    display: inline-block;
    margin: 4px;
    border-radius: 8px;
    font-size: 12px;
    padding: 8px;
    padding-left: 10px;
    background-color: ${({ theme }) => theme.palette.gray[300]};
    color: ${({ theme }) => theme.palette.fontSubColor};
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }

  & button {
    color: ${({ theme }) => theme.palette.fontSubColor};
    margin: 0 4px;
  }
`;
