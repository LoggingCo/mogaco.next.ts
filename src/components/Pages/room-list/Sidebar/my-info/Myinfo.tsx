import { editModal } from '@/atom/modal/atoms';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import SideHeader from '../header/Header';
import * as Styled from './Style';

function SideMyInfo({ userInfo }: any) {
  const setIsOpenEditModal = useSetRecoilState(editModal);
  const onOpenEditModal = () => {
    setIsOpenEditModal(true);
  };

  return (
    userInfo && (
      <>
        <SideHeader title={'내 정보'} style={{ borderRadius: '0 14px 0 0' }} />
        <Styled.Container>
          <Styled.Name>
            안녕하세요? <span onClick={onOpenEditModal}>🐣 {userInfo.name}</span>님
            <Link href={'/my-plan'}>
              <a>
                <p>내 학습 플래너</p>
              </a>
            </Link>
          </Styled.Name>
          <Styled.Info>
            <p>
              코딩 {'{'} {userInfo.day} {'}'} 일 째, 연속 접속 {'{'} {userInfo.continue} {'}'} 일
            </p>
            <p>
              총 {'{'} {userInfo.total} {'}'} 시간
            </p>
            <p>모임 {userInfo.mogaco} / 3개 참여중</p>
          </Styled.Info>
        </Styled.Container>
      </>
    )
  );
}
export default SideMyInfo;
