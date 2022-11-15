import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/libs/styles/theme';
import RoomListPage from '@/pages/room-list';
import { RecoilRoot } from 'recoil';

describe('<RoomList />', () => {
  it('룸 목록 페이지가 렌더링 된다', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <RoomListPage />
        </RecoilRoot>
      </ThemeProvider>,
    );

    const $mogacoInput = screen.getByPlaceholderText('모임 이름 입력 (최대 10자)');
    const $searchInput = screen.getByPlaceholderText('검색어를 입력해주세요');

    expect($mogacoInput).toBeInTheDocument();
    expect($searchInput).toBeInTheDocument();
  });

  //   it('인기 카테고리를 누르면 검색창 아래 검색한 태그가 생성된다', () => {
  //   });

  //   it('카테고리를 검색하면 검색창 아래 검색한 태그가 생성된다', () => {
  //   });

  //   it('로그인이 되어있지 않다면 로그인 버튼이 보인다', () => {
  //   });

  //   it('로그인이 되어있따면 내 정보가 보인다.', () => {
  //   });

  //   it('관리 버튼을 누르면 수정 모달이 나타난다.', () => {
  //   });
});
