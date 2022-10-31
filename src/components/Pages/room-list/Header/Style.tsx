import styled from 'styled-components';
import { flexAlignCenter, flexCenter, logoheader } from 'styles/common';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  height: 420px;
  position: relative;
`;

export const Header = styled.div`
  ${logoheader};
`;

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  height: calc(100% - 48px);
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 400px;
  text-align: right;
`;

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;

  & > button {
    width: 100px;
    background-color: ${({ theme }) => theme.palette.primary[100]};
    color: ${({ theme }) => theme.palette.primary[300]};
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    border-radius: 16px;
    margin-left: 0.5rem;
  }
`;

export const InputBox = styled.div`
  & input {
    width: 300px;
    height: 48px;
    text-align: center;
    background-color: #fff;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.palette.primary[300]};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-bottom: 0.3rem;
  }
`;
