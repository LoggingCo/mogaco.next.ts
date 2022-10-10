import styled, { css } from 'styled-components';

// background

export const BlackBackGround = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 100;
`;

// align

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexAlignStart = css`
  display: flex;
  align-items: flex-start;
`;

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const flexAlignEnd = css`
  display: flex;
  align-items: flex-end;
`;

export const flexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const flexJustifyBetween = css`
  display: flex;
  justify-content: space-between;
`;
