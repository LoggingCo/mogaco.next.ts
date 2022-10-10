import { useEffect, useState } from 'react';

const useSideOpen = (pathname: string) => {
  const [sideOpen, setSideOpen] = useState(false);

  useEffect(() => {
    switch (pathname) {
      case '/room-list':
        setSideOpen(true);
        break;
      default:
        return;
    }
  }, [pathname]);

  return { sideOpen, setSideOpen };
};
export default useSideOpen;
