import styled, { css } from 'styled-components';
import { ButtonStyleProps } from './Button';

const variantCSS = {
  primary: css`
    background: ${({ theme }) => theme.palette.primary[300]};
    color: ${({ theme }) => theme.palette.fontColor};
    &:disabled {
      opacity: 0.3;
    }
  `,

  'primary-text': css`
    background: none;
    color: ${({ theme }) => theme.palette.primary[300]};
  `,

  'primary-reverse': css`
    background: none;
    color: ${({ theme }) => theme.palette.primary[300]};
  `,

  secondary: css`
    background: ${({ theme }) => theme.palette.primary[200]};
    color: ${({ theme }) => theme.palette.fontColor};
    &:disabled {
      opacity: 0.3;
    }
  `,

  'secondary-text': css`
    background: none;
    color: ${({ theme }) => theme.palette.primary[200]};
  `,

  'secondary-reverse': css`
    background: none;
    color: ${({ theme }) => theme.palette.primary[200]};
  `,

  default: css`
    background: ${({ theme }) => theme.palette.subColor};
    border: 1px solid ${({ theme }) => theme.palette.fontSubColor};

    &:disabled {
      opacity: 0.3;
    }
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 16px;
  `,
};

const sizeCSS = {
  small: css`
    width: 100px;
    height: 32px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,

  medium: css`
    width: 300px;
    height: 48px;
    font-size: ${({ theme }) => theme.fontSize.large};
  `,

  large: css`
    width: 450px;
    height: 64px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  `,

  full: css`
    width: 100%;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,
};

export const Button = styled.button<ButtonStyleProps>`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: none;
  :hover {
    opacity: 0.8;
  }
`;
