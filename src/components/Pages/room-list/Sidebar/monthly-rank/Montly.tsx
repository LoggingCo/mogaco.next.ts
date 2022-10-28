import { useEffect, useState } from 'react';
import SideHeader from '../header/Header';
import * as Styeld from './Style';

function SideMonthlyRank() {
  const [active, setActive] = useState<any>(false);
  const [monthlyRank, setMonthlyRank] = useState([
    { rank: 1, name: '모여라ㅏㅏㅏ친구들' },
    { rank: 2, name: "who's the one" },
    { rank: 3, name: '실리콘벨리 가즈아' },
    { rank: 4, name: '모임 모임?' },
    { rank: 5, name: '공무원 합격은 다모임' },
  ]);

  return (
    <>
      <SideHeader title="월간 모임 ranking" active={active} setActive={setActive} />
      <Styeld.Container active={active}>
        {monthlyRank.map((rank) => (
          <Styeld.Rank key={rank.rank}>
            <span>{rank.rank}위</span>
            <span>{rank.name}</span>
          </Styeld.Rank>
        ))}
      </Styeld.Container>
    </>
  );
}
export default SideMonthlyRank;
