import { useState } from 'react';
import SideHeader from '../header/Header';
import * as Styeld from './Style';

function SideMyMogaco({ myMogaco }: any) {
  return (
    <>
      <SideHeader title="내 모임" />
      <Styeld.Container>
        <Styeld.Mogaco>
          {myMogaco.map((mogaco: any) => (
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
