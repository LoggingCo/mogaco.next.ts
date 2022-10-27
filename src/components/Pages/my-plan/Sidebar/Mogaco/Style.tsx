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
`;

export const MogacoList = styled.ul`
  & > li {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.small};

    & span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  & > li > p {
    ${flexAlignCenter};
  }

  & > li:first-child {
    & > p > span {
      background-color: ${({ theme }) => theme.palette.yellow};
    }
  }

  & > li:nth-of-type(2) {
    & > p > span {
      background-color: ${({ theme }) => theme.palette.puple};
    }
  }

  & > li:last-child {
    & > p > span {
      background-color: ${({ theme }) => theme.palette.sky};
    }
  }
`;

export const MogaoTime = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
