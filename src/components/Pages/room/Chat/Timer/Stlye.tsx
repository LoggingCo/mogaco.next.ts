import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Timer = styled.div`
  width: calc(100% - 25%);
  min-width: calc(100% - 330px);
  height: 60px;
  ${flexAlignCenter};
  justify-content: center;
  font-size: 32px;
  & span {
    border-bottom: 1px solid #222;
  }
`;
