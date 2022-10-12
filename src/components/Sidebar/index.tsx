import styled from 'styled-components';
import SideMonthlyRank from './monthly-rank/Montly';
import SideMyInfo from './my-info/Myinfo';
import SideMyMogaco from './my-mogaco/Mymogaco';
import SideSiginIn from './sign-in/Signin';
import SideWeeklyRank from './weekly-rank/Weelky';

function Sidebar() {
  return (
    <Wrapper>
      <SideSiginIn />
      {/* <SideMyInfo />
      <SideMyMogaco /> */}
      <SideMonthlyRank />
      <SideWeeklyRank />
    </Wrapper>
  );
}
export default Sidebar;

const Wrapper = styled.div`
  min-width: 330px;
  height: calc(100vh - 150px);
  overflow: scroll;
  position: sticky;
  align-self: flex-start;
  border-radius: 0 18px 0 0;
  top: 150px;
  left: 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;
