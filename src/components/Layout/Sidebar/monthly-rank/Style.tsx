import styled from 'styled-components';
import { flexCenter } from 'styles/common';

type ContainerProps = {
  active: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${flexCenter}
  flex-direction: column;
  padding: ${({ active }) => (active ? '16px 0' : '0')};
  height: ${({ active }) => (active ? 'auto' : '0')};
  overflow: ${({ active }) => (active ? 'block' : 'hidden')};
  transition: margin 0.5s ease-in-out;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;

export const Rank = styled.div`
  ${flexCenter};
  width: 70%;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.palette.fontColor};
  margin: 16px 0;
`;
