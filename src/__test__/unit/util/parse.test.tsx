import { parseLevel } from '@/libs/utils/parseLevel';
import { parseMonth } from '@/libs/utils/parseMonth';
import { parseTimerHour } from '@/libs/utils/parseTimer';

describe('데이터 파싱', () => {
  it('레벨 파싱', () => {
    const level = parseLevel(1);
    expect(level).toEqual('🐥');
  });

  it('월별 파싱', () => {
    const date = parseMonth(0);
    expect(date).toEqual('January');
  });

  it('타이머 파싱', () => {
    const hour = parseTimerHour(3600);
    const min = parseTimerHour(60);

    expect(hour).toEqual('01:00');
    expect(min).toEqual('00:01');
  });
});
