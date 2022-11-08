import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Wrapper = styled.div`
  margin: 16px 0;
  width: 80%;
  height: 20%;
  border-radius: 8px;
  position: relative;
  background-color: rgba(58, 165, 221, 0.8);
  cursor: pointer;
  ${flexCenter};

  & p {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    color: ${({ theme }) => theme.palette.fontSubColor};
  }

  & video {
    width: 100%;
    height: 100%;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 8px;

  & button {
    margin: 0 6px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.gray[200]};
    color: ${({ theme }) => theme.palette.fontColor};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
