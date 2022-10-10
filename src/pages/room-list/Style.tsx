import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const Header = styled.div`
  text-align: center;
`;

export const Logo = styled.div`
  font-size: 60px;
  color: ${({ theme }) => theme.palette.primary[300]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  height: 300px;
`;
