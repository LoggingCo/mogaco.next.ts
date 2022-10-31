import styled from 'styled-components';
import { fadein } from 'styles/keyframe';

export const Wrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.subColor};
  color: ${({ theme }) => theme.palette.fontSubColor};
  text-align: center;
  z-index: 100;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  animation: ${fadein} 0.5s;
`;

export const Header = styled.div``;
export const Content = styled.div``;
export const Button = styled.div``;
