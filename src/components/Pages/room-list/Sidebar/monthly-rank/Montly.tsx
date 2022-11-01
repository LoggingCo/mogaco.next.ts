import { useState } from 'react';
import SideHeader from '../header/Header';
import * as Styeld from './Style';

function SideMonthlyRank({ monthlyRank }: any) {
  const [active, setActive] = useState<any>(false);

  return (
    <>
      <SideHeader title="월간 모임 ranking" active={active} setActive={setActive} />
      <Styeld.Container active={active}>
        {monthlyRank.map((rank: any) => (
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
