import { useMediaQuery } from 'react-responsive';
import { desktopS, mobileL, tablet } from '@/libs/styles/media';

type useMediaHook = {
  isPc: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

export const useMedia = (): useMediaHook => {
  const isPc = useMediaQuery({
    query: `(min-width:${desktopS}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width:${tablet}px) and (max-width:${desktopS}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width:${mobileL}px)`,
  });

  return { isPc, isTablet, isMobile };
};
