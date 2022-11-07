import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Form = styled.form`
  position: absolute;
  bottom: 32px;
  width: 100%;
  ${flexCenter};
  flex-direction: column;

  & input {
    background-color: #fff;
    border-radius: 8px;
    height: 48px;
    width: 90%;
    padding: 0 32px;
  }

  & button {
    display: none;
  }
`;

export const Title = styled.p`
  position: absolute;
  bottom: 12px;
  left: 7%;
  width: 90%;
  color: #999;
  font-size: 12px;
`;
