// HOC/withAuth.jsx
import TokenRepository from '@/repository/TokenRepository';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    // checks whether we are on client / browser or server.
    const router = useRouter();

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
      if (TokenRepository.getToken()) {
        setIsLogin(true);
      } else {
        router.replace('/sign');
      }
    }, []);

    return isLogin ? <WrappedComponent {...props} /> : null;
  };
};

export const withOutAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
      if (TokenRepository.getToken()) {
        router.replace('/');
      } else {
        setIsLogin(false);
      }
    }, []);

    return isLogin ? null : <WrappedComponent {...props} />;
  };
};
