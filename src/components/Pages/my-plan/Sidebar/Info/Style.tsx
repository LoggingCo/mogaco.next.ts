import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Header = styled.div`
  padding-left: 1rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
  background-color: ${({ theme }) => theme.palette.primary[300]};
  font-size: 10px;
  height: 2rem;
  ${flexAlignCenter}

  & p {
    display: flex;
    align-items: flex-end;
  }

  & span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-right: 0.3rem;
  }
`;

export const Level = styled.span`
  text-decoration: none;
  font-size: 16px;
`;

export const Name = styled.span`
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Content = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};

  & ul > li {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.small};

    :last-child {
      margin-top: 2rem;
      font-size: ${({ theme }) => theme.fontSize.medium};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`;
