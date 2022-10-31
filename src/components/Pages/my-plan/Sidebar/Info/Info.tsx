import { parseLevel } from 'libs/utils/parseLevel';
import * as Styled from './Style';

function MyPlanSideInfo({ info }: any) {
  return (
    <>
      <Styled.Header>
        <p>
          <Styled.Level>{parseLevel(info.user?.level)}</Styled.Level>
          <Styled.Name>{info.user?.name}</Styled.Name>
          님, 오늘도 모가코!
        </p>
      </Styled.Header>
      <Styled.Content>
        <ul>
          {Object.keys(info.time).map((key) => (
            <li key={key}>
              <p>{key}</p>
              <p>{info.time[key]}</p>
            </li>
          ))}
        </ul>
      </Styled.Content>
    </>
  );
}
export default MyPlanSideInfo;
