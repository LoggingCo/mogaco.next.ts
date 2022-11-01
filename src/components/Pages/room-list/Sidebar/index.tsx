import Modal from 'components/Common/Modal/Modal';
import { userData } from 'libs/mock/user.data';
import { useState } from 'react';
import styled from 'styled-components';
import SideMonthlyRank from './monthly-rank/Montly';
import SideMyInfo from './my-info/Myinfo';
import SideMyMogaco from './my-mogaco/Mymogaco';
import SidebarSearch from './Search/Search';
import SideSiginIn from './sign-in/Signin';
import SideWeeklyRank from './weekly-rank/Weelky';

function RoomListSidebar() {
  const [user, setUser] = useState<any>(userData);

  return (
    <Wrapper>
      <SidebarSearch />
      <SideSiginIn />
      {/* <SideMyInfo userInfo={user.user} /> */}
      <SideMyMogaco myMogaco={user.mogaco} />
      <SideMonthlyRank monthlyRank={user.monthly} />
      <SideWeeklyRank weeklyRank={user.weekly} />
    </Wrapper>
  );
}
export default RoomListSidebar;

const Wrapper = styled.div`
  min-width: 330px;
  height: 100vh;
  overflow: scroll;
  position: sticky;
  align-self: flex-start;
  border-radius: 0 18px 0 0;
  top: 0;
  left: 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;
