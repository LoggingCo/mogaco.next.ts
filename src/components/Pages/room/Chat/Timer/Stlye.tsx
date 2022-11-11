import styled from 'styled-components';
import { flexAlignCenter } from '@/libs/styles/common';

export const Timer = styled.div`
  width: 100%;
  height: 60px;
  ${flexAlignCenter};
  justify-content: center;
  font-size: 32px;
  & span {
    border-bottom: 1px solid #222;
  }
`;
