import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from '@/libs/styles/common';

export const Wrapper = styled.div`
  position: absolute;
  transform: translateX(100%);
  transition: transform 1s;
  top: 48px;
  right: 0;
  height: calc(100% - 48px);
  width: 25%;
  background-color: #edece9;
  border-radius: 32px 0 0 0;

  & > button {
    position: absolute;
    bottom: 0;
    height: 48px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary[300]};
    color: ${({ theme }) => theme.palette.fontSubColor};

    :hover {
      background-color: #edece9;
      color: ${({ theme }) => theme.palette.primary[300]};
    }
  }
`;

export const Header = styled.div`
  height: 32px;
  color: ${({ theme }) => theme.palette.primary[300]};
  padding-left: 1.5rem;
  ${flexAlignCenter};
  cursor: pointer;
`;

export const Container = styled.div``;
export const Description = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 0 1rem;
    color: ${({ theme }) => theme.palette.primary[300]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  & div {
    margin: 1rem 0;
    ${flexCenter};
  }

  & textarea {
    width: 90%;
    height: 120px;
    resize: none;
    border: none;
    padding: 0.5rem;

    ::placeholder {
      text-align: center;
      padding: 44px;
    }
  }
`;

export const Category = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 0 1rem;
    color: ${({ theme }) => theme.palette.primary[300]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  & div {
    margin: 1rem 0;
    padding-left: 1rem;
    ${flexAlignCenter};
  }

  & input {
    width: 50%;
    background-color: #fff;
    padding: 0 1rem;
    height: 32px;
  }

  & button {
    background-color: ${({ theme }) => theme.palette.primary[100]};
    color: ${({ theme }) => theme.palette.primary[300]};
    font-size: ${({ theme }) => theme.fontSize.small};
    height: 32px;
    width: 64px;
    border-radius: 8px;
    margin-left: 0.5rem;
  }
`;
