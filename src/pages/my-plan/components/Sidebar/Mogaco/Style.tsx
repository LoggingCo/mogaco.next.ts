import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Header = styled.div`
  padding-left: 1rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
  background-color: ${({ theme }) => theme.palette.primary[300]};
  height: 2rem;
  ${flexAlignCenter}
`;

export const Content = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};

  & ul > li {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
