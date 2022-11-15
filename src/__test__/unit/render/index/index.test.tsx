import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { ThemeProvider } from 'styled-components';
import theme from '@/libs/styles/theme';
import userEvent from '@testing-library/user-event';
import RoomListPage from '@/pages/room-list';
import { RecoilRoot } from 'recoil';

describe('<Home />', () => {
  it('홈페이지가 렌더링 되고 스냅샷을 비교한다', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );
    const home = screen.getByText('mogaco');

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('go 버튼 클릭 시 room-list 페이지로 이동된다', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );

    const $goButton = screen.getByText('go');
    userEvent.click($goButton);

    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <RoomListPage />
        </RecoilRoot>
      </ThemeProvider>,
    );

    const $roomListPage = screen.getByPlaceholderText('모임 이름 입력 (최대 10자)');
    expect($roomListPage).toBeInTheDocument();
  });
});
