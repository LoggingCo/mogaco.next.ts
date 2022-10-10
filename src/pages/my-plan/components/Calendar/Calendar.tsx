import dayjs, { Dayjs } from 'dayjs';
import { myplanData } from 'libs/mock/myplan.data';
import { useEffect, useState } from 'react';
import * as Styled from './Style';

dayjs.locale('ko');
function MyPlanCalendar() {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [selectMonth, setSelectMonth] = useState<number | null>(null);
  const [selectDate, setSelectDate] = useState<number | null>(null);

  const [dateElement, setDateElement] = useState<any>([]);
  const [dailyhours, setDailyhours] = useState<any>(myplanData);

  useEffect(() => {
    if (!date) return;
    setSelectMonth(date.month());
  }, [date]);

  useEffect(() => {
    if (!date) return;
    const firstDate = date.startOf('month'); // 1
    const lastDate = date.endOf('month'); // 30~31
    const selectMonthDateInfo = [];

    for (let i = 0; i < lastDate.date(); i++) {
      const date = firstDate.add(i, 'day');
      selectMonthDateInfo.push({
        date: date.date(),
        day: date.day(),
        isToday: date.isSame(dayjs(), 'day'),
      });
    }

    if (firstDate.day() !== 0) {
      const lastMonthDate = firstDate.subtract(1, 'month');
      for (let i = 0; i < firstDate.day(); i++) {
        selectMonthDateInfo.unshift({
          date: lastMonthDate.endOf('month').subtract(i, 'day').date(),
          day: lastMonthDate.endOf('month').subtract(i, 'day').day(),
          isMonth: false,
        });
      }
    }
    setDateElement(selectMonthDateInfo);
  }, [selectMonth]);

  return (
    <Styled.Wrapper>
      <Styled.Header></Styled.Header>
      <Styled.Container>
        {dateElement.map((date: any) => (
          <Styled.Date key={date.date}>
            {date.date}
            {dailyhours.map((dailyhour: any) => (
              <div key={dailyhour.date}>
                {dailyhour.date === date.date &&
                  dailyhour.mogaco.map((mogaco: any) => (
                    <div key={mogaco.name}>
                      <p>{mogaco.name}</p>
                      <p>{mogaco.time}</p>
                    </div>
                  ))}
              </div>
            ))}
          </Styled.Date>
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default MyPlanCalendar;
