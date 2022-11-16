import styled from 'styled-components';
import { flexCenter } from '@/libs/styles/common';

interface LoginStlyeProps {
  error: boolean;
}

export const Wrapper = styled.div`
  ${flexCenter}
  height: calc(100vh - 48px);
  padding-bottom: 48px;
`;

export const Form = styled.form`
  width: 480px;
  padding: 16px;

  & button {
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary[300]};
    height: 48px;
    color: ${({ theme }) => theme.palette.fontSubColor};
    border-radius: 8px;
    margin: 8px 0 16px 0;
  }
`;

export const InputBox = styled.div`
  position: relative;

  & > span {
    position: absolute;
    padding: 2px 8px;
    background-color: #fff;
    border-radius: 8px;
    color: #999;
    left: 49px;
    top: 12px;
  }

  & input {
    font-size: 14px;
    background-color: #fff;
    width: 100%;
    height: 80px;
    border: 1px solid #999;
    border-radius: 16px;
    text-align: center;
    margin: 16px 0 0 0;
  }
`;

export const Link = styled.div`
  font-size: 12px;
  text-align: right;
  color: #999;

  & span {
    color: ${({ theme }) => theme.palette.fontColor};
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 20px;
  }
`;

export const Error = styled.p<LoginStlyeProps>`
  color: ${({ theme }) => theme.palette.error};
  font-size: 12px;
  text-align: center;
  margin: 4px;
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
`;

export const Find = styled.div`
  margin: 4px 0 12px 0;
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fontSize.small};

  & span {
    color: #999;
    cursor: pointer;

    ::after {
      content: '|';
      margin: 8px;
    }

    :last-child {
      ::after {
        content: '';
        margin: 0;
      }
    }
  }
`;
