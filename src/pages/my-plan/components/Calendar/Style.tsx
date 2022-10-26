import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

type CalenderStyleProps = {
  isMonth: boolean;
  isToday: boolean;
};

export const Wrapper = styled.div`
  max-width: 1440px;
  max-height: 680px;
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
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  ${flexAlignCenter};
  padding-left: 2rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
`;
