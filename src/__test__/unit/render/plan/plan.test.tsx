import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/libs/styles/theme';
import MyPlanPage from '@/pages/my-plan';
import TokenRepository from '@/repository/TokenRepository';
import { RecoilRoot } from 'recoil';

describe('<Paln />', () => {
  beforeAll(() => {
    TokenRepository.setToken('test');
  });
  it('다이렉트 메시지 페이지가 렌더링 된다', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <MyPlanPage />
        </RecoilRoot>
      </ThemeProvider>,
    );
  });
});
