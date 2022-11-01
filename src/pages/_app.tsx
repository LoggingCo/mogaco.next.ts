import '../styles/globals.ts';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';
import { ReactNode } from 'react';
import './_app.css';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </ThemeProvider>
  );
}
export default MyApp;
