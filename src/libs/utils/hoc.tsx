// HOC/withAuth.jsx
import TokenRepository from '@/repository/TokenRepository';
import { useRouter } from 'next/router';

export const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();
      const accessToken = TokenRepository.getToken();
      if (!accessToken) {
        Router.replace('/sign');
        return null;
      }

      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export const withOutAuth = (WrappedComponent: any) => {
  return (props: any) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();
      const accessToken = TokenRepository.getToken();
      if (accessToken) {
        Router.replace('/');
        return null;
      }

      return <WrappedComponent {...props} />;
    }
    return null;
  };
};
