import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import theme from '@/libs/styles/theme';
import SignLogin from '@/components/Pages/sigin/Login/Login';

describe('<Login />', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <SignLogin />
    </ThemeProvider>,
  );

  const $emailInput = screen.getByPlaceholderText('이메일 입력하세요');
  const $passwordInput = screen.getByPlaceholderText('비밀번호를 입력하세요');

  it('아이디와 비밀번호를 입력해야만 버튼이 활성화된다', () => {
    const $loginButton = screen.getByRole('button');

    userEvent.type($emailInput, 'test');
    userEvent.type($passwordInput, 'test');
    userEvent.click($loginButton);

    expect($loginButton).toBeEnabled();
  });

  it('올바른 아이디 입력 후 로그인 버튼 클릭 시 로그인이 완료된다', () => {
    const email = 'test';
    const password = 'test';
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
