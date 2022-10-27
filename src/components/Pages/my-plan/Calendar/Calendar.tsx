import dayjs from 'dayjs';
import { myplanData } from 'libs/mock/myplan.data';
import { useCalendar } from 'hooks/Page/my-plan/useCalendar';
import { useState } from 'react';
import * as Styled from './Style';

dayjs.locale('ko');
function MyPlanCalendar({ date }: any) {
  const [selectDate, setSelectDate] = useState<number | null>(null);
  const [dailyhours, setDailyhours] = useState<any>(myplanData);
  const [dateElement, setDateElement] = useCalendar(date);

  console.log(dailyhours);

  return (
    <Styled.Wrapper>
      <Styled.Header>PLANNER</Styled.Header>
      <Styled.Container>
        {dateElement.map((date: any, index: number) => (
          <Styled.Date key={index} isToday={date.isToday} isMonth={date.isMonth}>
            {date.date}
            {dailyhours.length > 0 && (
              <Styled.DateContainer>
                {dailyhours.map(
                  (daily: any) =>
                    daily.date === date.date &&
                    daily.mogaco.map((mogaco: any) => <p>{mogaco.time}</p>),
                )}
              </Styled.DateContainer>
            )}
          </Styled.Date>
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default MyPlanCalendar;
