import { flexCenter } from '@/libs/styles/common';
import styled from 'styled-components';

interface SignUpFormProps {
  isAuth: boolean;
}

export const Wrapper = styled.div`
  ${flexCenter};
  height: calc(100vh - 48px);
  padding-bottom: 48px;
`;

export const Form = styled.form`
  width: 480px;
  padding: 16px;

  & > button {
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
    color: #999;
    border-radius: 8px;
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
  }

  & input {
    font-size: 14px;
    background-color: #fff;
    width: 100%;
    height: 72px;
    border: 1px solid #999;
    border-radius: 16px;
    text-align: center;
    margin: 16px 0 0 0;
  }

  & button {
    position: absolute;
    padding: 2px 8px;
    color: ${({ theme }) => theme.palette.primary[300]};
    right: 16px;
    top: 55%;
    transform: translateY(-50%);
  }
`;

export const accessInputBox = styled.div<SignUpFormProps>`
  margin: 16px 0;
  display: flex;
  position: relative;
  justify-content: space-between;

  & input {
    width: 80%;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 8px;
    height: 48px;
    text-align: center;
  }

  & button {
    background-color: ${({ theme, isAuth }) => (isAuth ? '#e9e9e9' : theme.palette.primary[300])};
    width: 82px;
    color: ${({ theme, isAuth }) => (isAuth ? '#999' : theme.palette.fontSubColor)};
  }

  & span {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    right: 108px;
  }
`;
