import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

type CalenderStyleProps = {
  isMonth: boolean;
  isToday: boolean;
};

export const Wrapper = styled.div`
  max-width: 1440px;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;
export const Date = styled.div<CalenderStyleProps>`
  width: 155px;
  height: 155px;
  border: 1px dotted #d3d3d3;
  ${({ isMonth }) => !isMonth && `color: #d3d3d3;`}
  ${({ isToday }) => isToday && `border: 1px solid #f00;`}
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;

  :hover {
    ${({ isMonth, theme }) => isMonth && `background-color: ${theme.palette.primary[100]};`}
  }
`;

export const DateContainer = styled.div`
  & > p {
    padding: 0.2rem 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  & > p:first-child {
    background-color: ${({ theme }) => theme.palette.yellow};
  }

  & > p:nth-of-type(2) {
    background-color: ${({ theme }) => theme.palette.puple};
  }

  & > p:last-child {
    background-color: ${({ theme }) => theme.palette.sky};
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  ${flexAlignCenter};
  padding-left: 2rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
`;
