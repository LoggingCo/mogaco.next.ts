import Layout from 'components/Layout/Layout';
import MyPlanCalendar from 'components/Pages/my-plan/Calendar/Calendar';
import MyPlanSidebar from 'components/Pages/my-plan/Sidebar/Sidebar';
import dayjs, { Dayjs } from 'dayjs';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

dayjs.locale('ko');
function MyPlanPage() {
  const [date, setDate] = useState<Dayjs>(dayjs());

  return (
    <Styled.Wrapper>
      <MyPlanSidebar date={date} setDate={setDate} />
      <MyPlanCalendar date={date} />
    </Styled.Wrapper>
  );
}

MyPlanPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MyPlanPage;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

const Styled = {
  Wrapper,
};
