import { userPlanData } from 'libs/mock/user.data';
import { useState } from 'react';
import { parseMonth } from 'utils/parseMonth';
import MyPlanSideInfo from './Info/SideInfo';
import MyPlanSideMogaco from './Mogaco/SideInfo';
import * as Styeld from './Style';
import MyPlanSideTodo from './Todo/SideInfo';

function MyPlanSidebar({ date, setDate }: any) {
  const [myinfo, setMyinfo] = useState<any>(userPlanData);

  return (
    <Styeld.Wrapper>
      <Styeld.Header>
        <button>{'<'}</button>
        <p>{parseMonth(date.month())}</p>
        <button>{'>'}</button>
      </Styeld.Header>
      <Styeld.Container>
        <MyPlanSideInfo info={{ user: myinfo.user, time: myinfo.time }} />
        <MyPlanSideMogaco mogaco={myinfo.mogaco} />
        <MyPlanSideTodo todo={myinfo.todo} />
      </Styeld.Container>
    </Styeld.Wrapper>
  );
}
export default MyPlanSidebar;
