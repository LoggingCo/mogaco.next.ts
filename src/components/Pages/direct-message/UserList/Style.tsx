import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 280px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
  border-right: none;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
