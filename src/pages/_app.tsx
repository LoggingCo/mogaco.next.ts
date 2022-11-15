import '../libs/styles/globals.ts';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../libs/styles/globals';
import theme from '../libs/styles/theme';
import { ReactNode } from 'react';
import './_app.css';
import { RecoilRoot } from 'recoil';
import initMockAPI from '@/__mock__';

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  // if (process.env.NODE_ENV === 'development') {
  //   initMockAPI();
  // }
  initMockAPI();
  // mock 데이터 배포 환경 테스트를 위한 모든 환경에서 실행

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
