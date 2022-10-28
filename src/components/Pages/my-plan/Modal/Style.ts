import styled from 'styled-components';
import { media } from 'styles/media';

type MemoModalType = {
  isModal: boolean;
};

export const Modal = styled.div<MemoModalType>`
  position: sticky;
  background-color: #edece9;
  top: 60px;
  max-height: 760px;
  z-index: 100;
  border-radius: 1rem;
  margin-left: 2rem;
  display: ${({ isModal }) => (isModal ? 'block' : 'none')};
  transition: transform 1s ease-in-out;
  transform: translateX(100%);

  & > button {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary[300]};
    color: ${({ theme }) => theme.palette.fontSubColor};
    height: 48px;

    :hover {
      background-color: transparent;
      color: ${({ theme }) => theme.palette.primary[300]};
    }
  }
`;

export const Header = styled.div`
  height: 32px;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontSubColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 1rem;

  & > button {
    color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;

export const Date = styled.div`
  padding: 0 1rem;
  margin-top: 32px;
  font-size: 24px;
  font-weight: bold;
`;

export const TitleBox = styled.div`
  margin: 32px 0;
  padding: 0 1rem;

  & input {
    border-bottom: 1px solid #222;
  }
`;

export const Title = styled.input`
  font-size: 36px;
  margin-bottom: 16px;
  width: 100%;
`;

export const SubTitle = styled.input`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  width: 60%;
`;

export const Content = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  position: relative;

  & textarea {
    width: 100%;
    height: 60%;
    resize: none;
    background-color: transparent;
    border: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
