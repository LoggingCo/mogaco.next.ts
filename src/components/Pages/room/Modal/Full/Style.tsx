import styled from 'styled-components';
import { flexCenter } from '@/libs/styles/common';

type FullViedoModalType = {
  isOpen: boolean;
};

export const Wrapper = styled.div<FullViedoModalType>`
  width: calc(100% - 280px);
  height: 100%;
  background-color: #000;
  position: absolute;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
`;

export const Button = styled.button`
  position: absolute;
  top: 32px;
  left: 32px;
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.palette.fontSubColor};
  :hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ViedoBox = styled.div`
  width: 80%;
  height: 100vh;
  ${flexCenter};

  & video {
    margin: 0 auto;
    width: 90%;
    aspect-ratio: 16 / 9;
    background-color: rgba(58, 165, 221, 0.8);
    border-radius: 8px;
  }
`;
