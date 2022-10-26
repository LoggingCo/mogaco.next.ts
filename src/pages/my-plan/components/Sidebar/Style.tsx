import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 360px;
  max-height: 680px;
  position: sticky;
  top: 100px;
  margin-right: 32px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  & > button {
    margin: 0 1rem;
    :hover {
      opacity: 0.8;
    }
  }

  & > p {
    min-width: 70%;
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.palette.primary[300]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const Container = styled.div`
  height: 100%;
`;
