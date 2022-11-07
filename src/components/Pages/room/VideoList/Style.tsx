import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 20%;
  min-width: 330px;
  height: calc(100% - 48px);
  position: absolute;
  right: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    color: ${({ theme }) => theme.palette.fontSubColor};
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`;
