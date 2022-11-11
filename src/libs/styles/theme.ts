import { DefaultTheme } from 'styled-components';

const palette = {
  primary: {
    100: '#BFDEEE',
    200: '#9DCDE7',
    300: '#3AA5DD',
  },
  subColor: '#EBF1F4',
  fontColor: '#222222',
  fontSubColor: '#ffffff',
  error: '#EB5757',
  subError: '#FFBA52',
  gray: {
    100: '#e9e9e9',
    200: '#D9D9D9',
    300: '#656565',
  },
  yellow: '#FFE381',
  puple: '#EDC4FC',
  sky: '#A4EEFF',
} as const;

const fontSize = {
  small: '14px',
  medium: '16px',
  large: '18px',
  xLarge: '24px',
  xxLarge: '32px',
} as const;

const fontWeight = {
  thin: '100',
  regular: '400',
  medium: '500',
  bold: '700',
} as const;

const lineHeight = {
  small: '16px',
  medium: '20px',
  large: '24px',
  xLarge: '28px',
} as const;

export type PaletteTypes = typeof palette;
export type PaletteKeyTypes = keyof typeof palette;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type LineHeightTypes = typeof lineHeight;

const theme: DefaultTheme = {
  palette,
  fontSize,
  fontWeight,
  lineHeight,
};

export default theme;
