import { parseLevel } from 'utils/parseLevel';
import * as Styeld from './Style';

function MyPlanSideInfo({ info }: any) {
  return (
    <>
      <Styeld.Header>
        <p>
          <Styeld.Level>{parseLevel(info.user?.level)}</Styeld.Level>
          <Styeld.Name>{info.user?.name}</Styeld.Name>
          님, 오늘도 모가코!
        </p>
      </Styeld.Header>
      <Styeld.Content>
        <ul>
          {Object.keys(info.time).map((key) => (
            <li key={key}>
              <p>{key}</p>
              <p>{info.time[key]}</p>
            </li>
          ))}
        </ul>
      </Styeld.Content>
    </>
  );
}
export default MyPlanSideInfo;
