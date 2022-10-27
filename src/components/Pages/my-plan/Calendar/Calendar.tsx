import dayjs from 'dayjs';
import { myplanData } from 'libs/mock/myplan.data';
import { useCalendar } from 'hooks/Page/my-plan/useCalendar';
import { useState } from 'react';
import * as Styled from './Style';
import MyPlanMemoModal from '../Modal/Memo';

dayjs.locale('ko');
function MyPlanCalendar({ date }: any) {
  const [selectDate, setSelectDate] = useState<any | null>(null);
  const [isOpenMemoModal, setIsOpenMemoModal] = useState<boolean>(false);
  const [dailyhours, setDailyhours] = useState<any>(myplanData);
  const [dateElement, setDateElement] = useCalendar(date);

  const onOpenMemoModal = (day: any) => {
    setSelectDate({
      date: day.date,
      month: date.month(),
      year: date.year(),
    });
    setIsOpenMemoModal(true);
  };

  return (
    <>
      {isOpenMemoModal && (
        <MyPlanMemoModal selectDate={selectDate} setIsOpenMemoModal={setIsOpenMemoModal} />
      )}
      <Styled.Wrapper style={{ zIndex: '0' }}>
        <Styled.Header>PLANNER</Styled.Header>
        <Styled.Container>
          {dateElement.map((date: any, index: number) => (
            <Styled.Date
              key={index}
              day={date.day}
              isToday={date.isToday}
              isMonth={date.isMonth}
              onClick={() => date.isMonth && onOpenMemoModal(date)}
            >
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
    </>
  );
}
export default MyPlanCalendar;
