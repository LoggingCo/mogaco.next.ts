import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

type DateElement = {
  date: number;
  day: number;
  isMonth: boolean;
  isToday?: boolean;
};

export const useCalendar = (date: Dayjs) => {
  dayjs.locale('ko');
  const [dateElement, setDateElement] = useState<DateElement[]>([]);

  useEffect(() => {
    if (!date) return;
    const firstDate = date.startOf('month'); // 1
    const lastDate = date.endOf('month'); // 30~31
    const selectMonthDateInfo: DateElement[] = [];

    for (let i = 0; i < lastDate.date(); i++) {
      const date = firstDate.add(i, 'day');
      selectMonthDateInfo.push({
        date: date.date(),
        day: date.day(),
        isMonth: true,
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
  }, [date]);
  return [dateElement, setDateElement];
};
