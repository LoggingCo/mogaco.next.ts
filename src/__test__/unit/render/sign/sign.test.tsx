import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/libs/styles/theme';
import userEvent from '@testing-library/user-event';
import Sign from '@/pages/sign';

describe('<Sign />', () => {
  it('로그인/회원가입 페이지가 렌더링 되고 스냅샷을 비교한다', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Sign />
      </ThemeProvider>,
    );
    const $loginButton = screen.getByRole('button', { name: '로그인' });

    expect($loginButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('아이디와 비밀번호를 입력해야만 버튼이 활성화된다', () => {
    render(
      <ThemeProvider theme={theme}>
        <Sign />
      </ThemeProvider>,
    );

    const $emailInput = screen.getByPlaceholderText('이메일 입력하세요');
    const $passwordInput = screen.getByPlaceholderText('비밀번호를 입력하세요');
    const $loginButton = screen.getByRole('button');

    userEvent.type($emailInput, 'test');
    userEvent.type($passwordInput, 'test');
    userEvent.click($loginButton);

    expect($loginButton).toBeEnabled();
  });

  it('회원가입 버튼 클릭 시 로그인 폼이 아닌 회원 가입이 보여야한다', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Sign />
      </ThemeProvider>,
    );

    const $signUpList = screen.getByRole('sign-up');
    userEvent.click($signUpList);

    await waitFor(() => {
      const $signUpBtn = screen.getByRole('button', { name: '회원가입' });
      expect($signUpBtn).toBeInTheDocument();
    });
  });
});
