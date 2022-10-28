import { useEffect, useRef } from 'react';
import * as Stytled from './Style';

function RoomListHeadeSibebar({ isOpenFormModal, setIsOpenFormModal }: any) {
  const Form = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpenFormModal) {
      Form.current!.style.transform = 'translateX(100%)';
    } else {
      Form.current!.style.transform = 'translateX(0)';
    }
  }, [isOpenFormModal]);

  const onCloseFormModal = () => {
    setIsOpenFormModal(false);
  };

  return (
    <Stytled.Wrapper ref={Form}>
      <Stytled.Header onClick={onCloseFormModal}>{'>>'}</Stytled.Header>
      <Stytled.Container>
        <Stytled.Description>
          <p>DESCRIPTION</p>
          <div>
            <textarea placeholder="상세 설명 (최대 50자)"></textarea>
          </div>
        </Stytled.Description>
        <Stytled.Category>
          <p>CATEGORY</p>
          <div>
            <input placeholder="카테고리 입력 최대 3개" />
            <button>추가</button>
          </div>
        </Stytled.Category>
      </Stytled.Container>
      <button>생성하기</button>
    </Stytled.Wrapper>
  );
}
export default RoomListHeadeSibebar;
