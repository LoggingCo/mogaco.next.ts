import { flexCenter } from '@/libs/styles/common';
import styled from 'styled-components';

interface FindFormProps {
  isError: boolean;
}

export const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
`;

export const Form = styled.form`
  ${flexCenter};
  flex-direction: column;
  width: 480px;
  margin-top: 16px;

  & input {
    width: 100%;
    height: 48px;
    background-color: #fff;
    border-radius: 8px;
    margin: 8px 0;
    text-align: center;
  }

  & button {
    background-color: ${({ theme }) => theme.palette.primary[300]};
    color: ${({ theme }) => theme.palette.fontSubColor};
    width: 100%;
    height: 48px;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const Error = styled.p<FindFormProps>`
  color: ${({ theme }) => theme.palette.error};
  font-size: 12px;
  text-align: center;
  margin: 8px 0 2px 0;
  visibility: ${({ isError }) => (isError ? 'visible' : 'hidden')};
`;
