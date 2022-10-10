const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

export const size = {
  mobileS: 375,
  mobileM: 568,
  mobileL: 768,
  tablet: 1024,
  desktopS: 1280,
  desktopM: 1440,
  desktopL: 1920,
};

const { mobileS, mobileM, mobileL, tablet, desktopS, desktopM, desktopL } = size;

export const media = {
  mobileS: mediaQuery(mobileS),
  mobileM: mediaQuery(mobileM),
  mobileL: mediaQuery(mobileL),
  tablet: mediaQuery(tablet),
  desktopS: mediaQuery(desktopS),
  desktopM: mediaQuery(desktopM),
  desktopL: mediaQuery(desktopL),
  custom: (maxWidth: number) => mediaQuery(maxWidth),
};
