import { LegacyRef, useCallback, useRef } from 'react';
import { BlackBackGround } from 'styles/common';
import * as Styled from './Style';
import dayjs from 'dayjs';

dayjs.locale('ko');
function MyPlanMemoModal({ selectDate, setIsOpenMemoModal }: any) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = useCallback(() => {
    if (!textRef.current) return;
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const onCloseMemoModal = () => {
    setIsOpenMemoModal(false);
  };

  return (
    <BlackBackGround>
      <Styled.Modal>
        <Styled.Header>
          <span>메모</span>
          <button onClick={onCloseMemoModal}>x</button>
        </Styled.Header>
        <Styled.Date>
          <span>{`${selectDate.year}. ${selectDate.month + 1}. ${selectDate.date}`}</span>
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
          <textarea placeholder="내용을 입력해주세요" ref={textRef} onInput={handleResizeHeight} />
        </Styled.Content>
      </Styled.Modal>
    </BlackBackGround>
  );
}
export default MyPlanMemoModal;
