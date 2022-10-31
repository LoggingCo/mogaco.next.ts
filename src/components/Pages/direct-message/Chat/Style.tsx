import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100% - 280px);
  height: 100%;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
  box-sizing: border-box;
  position: relative;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
