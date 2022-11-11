import styled from 'styled-components';
import { loading, skeleton } from '@/libs/styles/keyframe';

export const Wrapper = styled.div`
  width: 48%;
  height: 120px;
  position: relative;
  border-radius: 16px;
  margin: 8px;
  background-color: #f2f2f2;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
  animation: ${skeleton} 1.5s infinite ease-in-out;
`;
