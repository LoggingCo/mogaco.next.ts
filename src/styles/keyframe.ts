import { keyframes } from 'styled-components';

export const spin = keyframes`
to{
  transform: rotate(360deg);
}`;

export const fadein = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
  transform: translateY(-30px);
}`;

export const fadeout = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
  transform: translateY(30px);
}`;
