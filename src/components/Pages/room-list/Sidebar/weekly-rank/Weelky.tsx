import SideHeader from '../header/Header';
import { useState } from 'react';
import * as Styled from './Style';

function SideWeeklyRank({ weeklyRank }: any) {
  const [active, setActive] = useState<any>(false);

  return (
    <>
      <SideHeader title={'주간 개인 ranking'} active={active} setActive={setActive} />
      <Styled.Container active={active}>
        {weeklyRank.map((rank: any) => (
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
