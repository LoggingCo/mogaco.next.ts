import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Wrapper = styled.form`
  ${flexCenter}
  margin: 32px auto;
`;
export const Input = styled.input`
  width: 500px;
  padding: 16px 32px;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.primary[300]};
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontSubColor};
  padding: 16px 32px;
  margin-left: 8px;
  :hover {
    background-color: ${({ theme }) => theme.palette.primary[200]};
    border: 1px solid ${({ theme }) => theme.palette.primary[200]};
  }
`;
