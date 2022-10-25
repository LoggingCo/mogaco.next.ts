import Layout from 'components/Layout/Layout';
import { ReactElement } from 'react';
import MyPlanCalendar from './components/Calendar/Calendar';
import MyPlanSidebar from './components/Sidebar/Sidebar';
import * as Styled from './Style';

function MyPlanPage() {
  return (
    <Styled.Wrapper>
      <MyPlanSidebar />
      <MyPlanCalendar />
    </Styled.Wrapper>
  );
}

MyPlanPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default MyPlanPage;
