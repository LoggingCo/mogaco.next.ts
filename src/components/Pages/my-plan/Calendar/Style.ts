import styled from 'styled-components';
import { flexAlignCenter } from '@/libs/styles/common';
import { media } from '@/libs/styles/media';

type CalenderStyleProps = {
  isMonth: boolean;
  isToday: boolean;
  day: number;
};

export const Wrapper = styled.div`
  max-width: 1440px;

  ${media.custom(1680)} {
    max-width: 980px;
  }
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
  padding: 0.5rem;
  border: 1px dotted #d3d3d3;
  ${({ isToday }) => isToday && `border: 1px solid #f00;`}
  ${({ day }) => (day === 0 ? `color: #f00;` : day === 6 && `color: #0000ff;`)}
  ${({ isMonth }) => !isMonth && `color: #d3d3d3;`}
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;

  ${media.custom(1680)} {
    width: 125px;
    height: 125px;
    padding-bottom: 1rem;
  }

  :hover {
    ${({ isMonth, theme }) => isMonth && `background-color: ${theme.palette.primary[100]};`}
  }
`;

export const DateContainer = styled.div`
  color: ${({ theme }) => theme.palette.fontColor};
  font-size: 0.825rem;
  & > p {
    padding: 0.2rem 1rem;
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
