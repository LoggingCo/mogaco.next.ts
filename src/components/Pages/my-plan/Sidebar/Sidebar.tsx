import { useState } from 'react';
import { parseMonth } from 'libs/utils/parseMonth';
import MyPlanSideInfo from './Info/Info';
import MyPlanSideMogaco from './Mogaco/Mogaco';
import MyPlanSideTodo from './Todo/Todo';
import styled from 'styled-components';
import { userPlanData } from '@/__mock__/user.data';

function MyPlanSidebar({ date, setDate }: any) {
  const [myinfo, setMyinfo] = useState<any>(userPlanData);

  const onPrevMonth = () => {
    const newDate = date.subtract(1, 'month');
    setDate(newDate);
  };

  const onNextMonth = () => {
    const newDate = date.add(1, 'month');
    setDate(newDate);
  };

  return (
    <Styled.Wrapper>
      <p>{date.year()}</p>
      <Styled.Header>
        <button onClick={onPrevMonth}>{'<'}</button>
        <p>{parseMonth(date.month())}</p>
        <button onClick={onNextMonth}>{'>'}</button>
      </Styled.Header>
      <Styled.Container>
        <MyPlanSideInfo info={{ user: myinfo.user, time: myinfo.time }} />
        <MyPlanSideMogaco mogaco={myinfo.mogaco} />
        <MyPlanSideTodo todo={myinfo.todo} />
      </Styled.Container>
    </Styled.Wrapper>
  );
}
export default MyPlanSidebar;

const Wrapper = styled.div`
  width: 360px;
  max-height: 720px;
  position: sticky;
  top: 100px;
  margin-right: 32px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  & > button {
    margin: 0 1rem;
    :hover {
      opacity: 0.8;
    }
  }

  & > p {
    min-width: 70%;
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.palette.primary[300]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const Container = styled.div`
  height: 100%;
`;

const Styled = {
  Wrapper,
  Header,
  Container,
};
