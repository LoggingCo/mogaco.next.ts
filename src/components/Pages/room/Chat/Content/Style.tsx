import styled from 'styled-components';
import { flexCenter } from '@/libs/styles/common';

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  height: calc(100% - 180px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  font-size: ${({ theme }) => theme.fontSize.small};
`;
export const Container = styled.div``;
export const Date = styled.div`
  ${flexCenter};
  margin: 16px 0;

  & p {
    width: 40%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.fontColor};
  }

  & h1 {
    margin: 0 10px;
  }
`;
