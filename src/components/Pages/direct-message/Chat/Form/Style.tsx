import styled from 'styled-components';

export const Wrapper = styled.form`
  position: sticky;
  width: 100%;
  bottom: 0;
  height: 48px;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.palette.primary[300]};

  & textarea {
    width: 95%;
    background-color: #fff;
    padding: 1rem;
    resize: none;
    border: none;
    outline: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  & button {
    width: 5%;
    background-color: ${({ theme }) => theme.palette.primary[300]};
    color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;
