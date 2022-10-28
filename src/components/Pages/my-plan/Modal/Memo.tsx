import { useCallback, useEffect, useRef } from 'react';
import * as Styled from './Style';
import dayjs from 'dayjs';

dayjs.locale('ko');
function MyPlanMemoModal({ selectDate, isOpenMemoModal, setIsOpenMemoModal }: any) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const MemoRef = useRef<HTMLDivElement>(null);

  const TransFormMemoModal = () => {
    setTimeout(() => {
      MemoRef.current!.style.transform = 'translateX(0)';
    }, 100);
  };

  const onCloseMemoModal = () => {
    MemoRef.current!.style.transform = 'translateX(100%)';
    setTimeout(() => {
      setIsOpenMemoModal(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isOpenMemoModal) return;
    TransFormMemoModal();
  }, [isOpenMemoModal]);

  return (
    <>
      <Styled.Modal isModal={isOpenMemoModal} ref={MemoRef}>
        <Styled.Header>
          <span>MEMO</span>
          <button onClick={onCloseMemoModal}>{'>'}</button>
        </Styled.Header>
        <Styled.Date>
          <span>{`${selectDate?.year}. ${selectDate?.month + 1}. ${selectDate?.date}`}</span>
        </Styled.Date>
        <Styled.TitleBox>
          <p>
            <Styled.Title placeholder="제목 없음" />
          </p>
          <p>
            <Styled.SubTitle placeholder="소제목" />
          </p>
        </Styled.TitleBox>
        <Styled.Content>
          <textarea placeholder="내용을 입력해주세요" ref={textRef} />
        </Styled.Content>
        <button>저장</button>
      </Styled.Modal>
    </>
  );
}
export default MyPlanMemoModal;
