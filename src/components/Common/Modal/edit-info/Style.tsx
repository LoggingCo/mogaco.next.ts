import styled from 'styled-components';

export const Wrapper = styled.div``;
export const inputBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > p {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
    position: relative;

    & span {
      font-size: ${({ theme }) => theme.fontSize.small};
    }

    & input {
      width: 80%;
      height: 40px;
      background-color: #fff;
      border-radius: 8px;
      padding: 0 2rem;
    }

    & button {
      position: absolute;
      right: 12px;
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.palette.primary[300]};
    }
  }
`;

export const Content = styled.div``;
