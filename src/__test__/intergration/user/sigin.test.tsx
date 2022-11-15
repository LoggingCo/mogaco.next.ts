import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/libs/styles/theme';
import SignSignUp from '@/components/Pages/sigin/SiginUp/SiginUp';

describe('<SignUp />', () => {
  it('인증완료와 아이디, 버튼이 활성화 되어야만 버튼이 활성화 된다', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SignSignUp />
      </ThemeProvider>,
    );
    const $loginButton = screen.getByText('회원가입');
    const $authBtn = screen.getByText('인증');
  });

  // it('이메일 인증 버튼 클릭 후 해당 메일로 인증 메시지가 전송된다 ', () => {});
});
