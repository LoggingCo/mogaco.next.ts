import '../styles/globals.ts';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  const route = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {route.pathname === '/' ? (
        <Component {...pageProps} />
      ) : (
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      )}
    </ThemeProvider>
  );
}
export default MyApp;
