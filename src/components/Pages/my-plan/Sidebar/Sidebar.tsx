import { userPlanData } from 'libs/mock/user.data';
import { useState } from 'react';
import { parseMonth } from 'utils/parseMonth';
import MyPlanSideInfo from './Info/SideInfo';
import MyPlanSideMogaco from './Mogaco/SideInfo';
import MyPlanSideTodo from './Todo/SideInfo';
import styled from 'styled-components';

function MyPlanSidebar({ date, setDate }: any) {
  const [myinfo, setMyinfo] = useState<any>(userPlanData);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <button>{'<'}</button>
        <p>{parseMonth(date.month())}</p>
        <button>{'>'}</button>
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
  max-height: 680px;
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
