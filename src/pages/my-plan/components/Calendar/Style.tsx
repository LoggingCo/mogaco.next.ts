import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1085px;
  height: 680px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Date = styled.div`
  width: 155px;
  height: 240px;
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary[300]};
`;
