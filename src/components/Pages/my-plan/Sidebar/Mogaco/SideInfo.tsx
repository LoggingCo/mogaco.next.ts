import * as Styled from './Style';

function MyPlanSideMogaco({ mogaco }: any) {
  return (
    <>
      <Styled.Header>mogaco List</Styled.Header>
      <Styled.Content>
        <ul>
          {mogaco.map((mogaco: any) => (
            <li key={mogaco.id}>
              <p>{mogaco.name}</p>
              <p>{mogaco.time}</p>
            </li>
          ))}
        </ul>
      </Styled.Content>
    </>
  );
}
export default MyPlanSideMogaco;
