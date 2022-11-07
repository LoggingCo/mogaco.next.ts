import * as Styled from './Style';

function MyPlanSideMogaco({ mogaco }: any) {
  return (
    <>
      <Styled.Header>mogaco List</Styled.Header>
      <Styled.Content>
        <Styled.MogacoList>
          {mogaco.map((mogaco: any, index: number) => (
            <li key={index}>
              <p>
                <span></span> {mogaco.name}
              </p>
              <Styled.MogaoTime>{mogaco.time}</Styled.MogaoTime>
            </li>
          ))}
        </Styled.MogacoList>
      </Styled.Content>
    </>
  );
}
export default MyPlanSideMogaco;
