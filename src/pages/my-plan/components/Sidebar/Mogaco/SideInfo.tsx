import * as Styeld from './Style';

function MyPlanSideMogaco({ mogaco }: any) {
  return (
    <>
      <Styeld.Header>mogaco List</Styeld.Header>
      <Styeld.Content>
        <ul>
          {mogaco.map((mogaco: any) => (
            <li key={mogaco.id}>
              <p>{mogaco.name}</p>
              <p>{mogaco.time}</p>
            </li>
          ))}
        </ul>
      </Styeld.Content>
    </>
  );
}
export default MyPlanSideMogaco;
