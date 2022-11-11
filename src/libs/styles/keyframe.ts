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

export const skeleton = keyframes`
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
`;

export const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(520px);
  }
`;
