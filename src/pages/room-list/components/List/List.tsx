import { useState } from 'react';
import RoomCard from '../Card/Card';
import SkeletonCard from '../SkeletonCard/Skelton';
import * as Styled from './Style';

function RoomCardList() {
  const [roomList, setRoomList] = useState([
    {
      id: 1,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 2,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 3,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 4,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 5,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 6,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 7,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 8,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗 리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 9,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 10,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 11,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 12,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 13,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 14,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 15,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 16,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 17,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 18,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗 리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 19,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
    {
      id: 20,
      title: '모여라ㅏㅏㅏ친구들',
      description:
        '환영합니다! 우리는 날때부터 개발자 ㅋ는 아니고 같이 꾸준히 코딩하면서 실력쌓을 분들을 기다립니다 🤗',
      category: '개발',
      maxMember: 5,
      currentMember: 3,
      startDate: '2021-08-01',
      duringDate: 128,
      totalhour: '215d 12h',
      isPublic: true,
      isRecruiting: true,
    },
  ]);

  return (
    <Styled.Wrapper>
      {roomList.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
      <SkeletonCard />
    </Styled.Wrapper>
  );
}
export default RoomCardList;
