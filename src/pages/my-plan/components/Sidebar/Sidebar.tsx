import { userPlanData } from 'libs/mock/user.data';
import { useState } from 'react';
import { parseMonth } from 'utils/parseMonth';
import * as Styeld from './Style';

function MyPlanSidebar({ date, setDate }: any) {
  const [myinfo, setMyinfo] = useState<any>(userPlanData);

  return (
    <Styeld.Wrapper>
      <Styeld.Header>
        <button>{'<'}</button>
        <p>{parseMonth(date.month())}</p>
        <button>{'>'}</button>
      </Styeld.Header>
      <Styeld.Container></Styeld.Container>
    </Styeld.Wrapper>
  );
}
export default MyPlanSidebar;
