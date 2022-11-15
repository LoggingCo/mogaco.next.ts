import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/libs/styles/theme';
import MogacoRoomPage from '@/pages/room/[roomId]';
import TokenRepository from '@/repository/TokenRepository';
import { RecoilRoot } from 'recoil';

describe('<Room />', () => {
  beforeAll(() => {
    TokenRepository.setToken('test');
  });
  it('화상룸 페이지가 렌더링 된다', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <MogacoRoomPage />
        </RecoilRoot>
      </ThemeProvider>,
    );
  });
});
