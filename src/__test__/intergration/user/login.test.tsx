import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import theme from '@libs/styles/theme';
import SignLogin from '@components/Pages/sigin/Login/Login';

describe('<Login />', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <SignLogin />
    </ThemeProvider>,
  );

  it('올바른 아이디 입력 후 로그인 버튼 클릭 시 로그인이 완료된다', async () => {
    const email = 'test';
    const password = 'test';

    // await waitFor(() => {});
  });

  it('다른 아이디를 입력 후 로그인 버튼 클릭 시 아이디가 틀렸다는 에러', async () => {
    const email = 'test123';
    const password = 'test';
    let error: any;
  });

  it('다른 아이디를 입력 후 로그인 버튼 클릭 시 비밀번호가 틀렸다는 에러', () => {
    const email = 'test';
    const password = 'test123';
  });
});

// describe('<FindEmail />', () => {});
// describe('<FindPassword />', () => {});
