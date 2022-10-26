import Layout from 'components/Layout/Layout';
import dayjs, { Dayjs } from 'dayjs';
import { ReactElement, useState } from 'react';
import MyPlanCalendar from './components/Calendar/Calendar';
import MyPlanSidebar from './components/Sidebar/Sidebar';
import * as Styled from './Style';

dayjs.locale('ko');
function MyPlanPage() {
  const [date, setDate] = useState<Dayjs>(dayjs());

  return (
    <Styled.Wrapper>
      <MyPlanSidebar date={date} setData={setDate} />
      <MyPlanCalendar date={date} />
    </Styled.Wrapper>
  );
}

MyPlanPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MyPlanPage;
