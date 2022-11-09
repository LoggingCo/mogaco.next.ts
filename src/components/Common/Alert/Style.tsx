import styled from 'styled-components';
import { fadein } from 'styles/keyframe';

export const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 0 32px;
  border-radius: 10px;
  background-color: #f5f5f5;
  color: ${({ theme }) => theme.palette.fontSubColor};
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  animation: ${fadein} 0.5s;
  z-index: 1000;
`;

export const Header = styled.div`
  height: 16px;
`;
export const Content = styled.div``;
export const Button = styled.div``;
