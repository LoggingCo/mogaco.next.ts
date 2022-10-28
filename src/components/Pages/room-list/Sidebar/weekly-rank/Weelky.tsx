import SideHeader from '../header/Header';
import { useState } from 'react';
import * as Styled from './Style';

function SideWeeklyRank() {
  const [active, setActive] = useState<any>(false);
  const [weeklyRank, setWeeklyRank] = useState([
    { rank: 1, name: '🐤 Top-hoon' },
    { rank: 2, name: '🐣 Logginco' },
    { rank: 3, name: '🐥 Minzy123_kim' },
    { rank: 4, name: '🐣 아기 개발자04' },
    { rank: 5, name: '🐥 익명의 프론트' },
  ]);

  return (
    <>
      <SideHeader title={'주간 개인 ranking'} active={active} setActive={setActive} />
      <Styled.Container active={active}>
        {weeklyRank.map((rank) => (
          <Styled.Rank key={rank.rank}>
            <span>{rank.rank}위</span>
            <span>{rank.name}</span>
          </Styled.Rank>
        ))}
      </Styled.Container>
    </>
  );
}
export default SideWeeklyRank;
