import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Header = styled.div`
  padding: 0 1rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
  background-color: ${({ theme }) => theme.palette.primary[300]};
  height: 2rem;
  ${flexAlignCenter}
  justify-content: space-between;

  & button {
    color: ${({ theme }) => theme.palette.fontSubColor};
    :hover {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;
