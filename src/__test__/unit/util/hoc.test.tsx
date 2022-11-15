import theme from '@/libs/styles/theme';
import Sign from '@/pages/sign';
import TokenRepository from '@/repository/TokenRepository';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import MyPlanPage from '@/pages/my-plan';

describe('HOC 페이지 접근', () => {
  it('로그인 한 사용자는 로그인 페이지에 접근할 수 없다', async () => {
    TokenRepository.setToken('test');

    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <Sign />
        </ThemeProvider>,
      );
    }).toThrowError("Cannot read properties of null (reading 'replace')");
  });

  it('로그인하지 않은 사용자는 마이플랜 페이지에 접근할 수 없다', async () => {
    TokenRepository.removeToken();
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <MyPlanPage />
          </RecoilRoot>
        </ThemeProvider>,
      );
    }).toThrowError("Cannot read properties of null (reading 'replace')");
  });
});
