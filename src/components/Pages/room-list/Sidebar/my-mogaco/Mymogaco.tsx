import { useState } from 'react';
import SideHeader from '../header/Header';
import * as Styeld from './Style';

function SideMyMogaco() {
  const [myMogaco, setMyMogaco] = useState([
    { name: '모여라ㅏㅏㅏ친구들', week: 6, total: 192 },
    { name: '퇴근 후 스터디', week: 12, total: 256 },
    { name: 'proj_mo', week: 32, total: 697 },
  ]);

  return (
    <>
      <SideHeader title="내 모임" />
      <Styeld.Container>
        <Styeld.Mogaco>
          {myMogaco.map((mogaco) => (
            <Styeld.List key={mogaco.name}>
              <p>
                <span></span>
                {mogaco.name}
              </p>
              <div>
                <span></span> {mogaco.week} / {mogaco.total} h
              </div>
            </Styeld.List>
          ))}
        </Styeld.Mogaco>
      </Styeld.Container>
    </>
  );
}
export default SideMyMogaco;
