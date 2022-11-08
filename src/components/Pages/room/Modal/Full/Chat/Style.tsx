import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Wrapper = styled.div`
  width: 25%;
  height: 100vh;
  background-color: #f6f1f0;
  position: relative;
`;

export const Header = styled.div`
  height: 48px;
  background-color: #fff;
  ${flexCenter};
`;

export const Contatiner = styled.div`
  height: calc(100vh - 48px - 100px);
`;

export const Form = styled.form`
  position: absolute;
  width: 100%;
  bottom: 0;

  & textarea {
    width: 100%;
    outline: none;
    border: none;
    resize: none;
    height: 100px;
    padding: 16px;
  }
`;
