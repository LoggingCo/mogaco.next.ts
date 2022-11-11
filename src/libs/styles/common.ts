import styled, { css } from 'styled-components';

// background

export const ModalBackGround = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(52, 59, 62, 0.4);
  z-index: 100;
  position: fixed;
`;

// center

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const fixCenter = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// flex

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

// layout header
export const logoheader = css`
  width: 100%;
  height: 48px;
  padding: 0 3rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  cursor: pointer;
  ${flexAlignCenter};
`;
