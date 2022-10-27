import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  background-color: #edece9;
  top: 50%;
  left: 50%;
  width: 30vw;
  aspect-ratio: 3/5;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 1rem;
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
  height: 50%;

  & textarea {
    width: 100%;
    height: 100%;
    resize: none;
    background-color: transparent;
    border: none;
  }
`;
