import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > div:nth-child(3n) {
    background-color: ${({ theme }) => theme.palette.gray[200]};
  }
`;
