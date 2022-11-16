import { useState } from 'react';
import * as Styled from './Style';

function FindPassworForm() {
  const [isError, setIsError] = useState(true);

  const onSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('이메일이 전송되었습니다');
  };

  return (
    <Styled.Wrapper>
      <h1>가입 시 입력한 이메일을 입력해주세요</h1>
      <Styled.Form onSubmit={onSendEmail}>
        <input type="text" placeholder="가입 이메일 입력" />
        <button>이메일 전송</button>
      </Styled.Form>
      <Styled.Error isError={isError}>가입되지 않은 이메일입니다.</Styled.Error>
    </Styled.Wrapper>
  );
}
export default FindPassworForm;
