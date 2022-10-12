import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Container = styled.div`
  padding: 16px 0;
  ${flexCenter}
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;

export const Input = styled.input`
  width: 80%;
  background-color: #fff;
  margin: 4px 0;
  height: 40px;
  padding-left: 16px;
`;

export const ButtonGroup = styled.div`
  width: 80%;
  text-align: right;
  font-size: 10px;
  margin-top: 8px;

  & > button {
    margin: 0 5px;
  }
`;
