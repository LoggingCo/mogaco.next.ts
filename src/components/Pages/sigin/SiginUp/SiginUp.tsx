import useInputs from '@/hooks/Common/useInputs';
import { useTimer } from '@/hooks/Common/useTimer';
import { parseTimerMinute } from '@/libs/utils/parseTimer';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as Styled from './Style';

interface Form {
  email: string;
  AuthNumber: string;
  password: string;
  passwordConfirm: string;
}

function SignSignUp() {
  const [{ email, AuthNumber, password, passwordConfirm }, onChangeForm] = useInputs<Form>({
    email: '',
    AuthNumber: '',
    password: '',
    passwordConfirm: '',
  });

  const [Timer, setTimer, onStopTimer] = useTimer(180, 'minus');
  const [isEmailAuth, setIsEmailAuth] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [isTime, setIsTime] = useState(false);

  const router = useRouter();

  const onSendEmail = () => {
    alert('이메일이 전송되었습니다');
    setIsEmailAuth(true);
    setIsTime(true);
  };

  const onReSendEmail = () => {
    alert('이메일이 전송되었습니다');
    setIsEmailAuth(true);
    setIsTime(true);
    setTimer(180);
  };

  const onAuthEmail = () => {
    alert('인증되었습니다');
    setIsAuth(true);
  };

  const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    if (!isAuth) {
      alert('이메일 인증을 해주세요');
      return;
    }

    alert('회원가입이 완료되었습니다');
    router.push('/sign');
  };

  useEffect(() => {
    if (Timer === 0) {
      onStopTimer();
      setIsEmailAuth(false);
    }
  }, [Timer]);

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={onSignUp}>
        <Styled.InputBox>
          <input placeholder="이메일을 입력해주세요" name={email} />
          <button type="button" onClick={onSendEmail}>
            인증
          </button>
          <span>이메일</span>
        </Styled.InputBox>
        {isTime && (
          <Styled.accessInputBox>
            <input placeholder="인증번호" name={AuthNumber} />
            <span>{parseTimerMinute(Timer as number)}</span>
            <button type="button" onClick={isEmailAuth ? onAuthEmail : onReSendEmail}>
              {isEmailAuth ? '인증하기' : '재전송'}
            </button>
          </Styled.accessInputBox>
        )}
        <Styled.InputBox>
          <input type="password" placeholder="비밀번호" name={password} />
          <span>비밀번호</span>
        </Styled.InputBox>
        <Styled.InputBox>
          <input type="password" placeholder="비밀번호 확인" name={passwordConfirm} />
          <span>확인</span>
        </Styled.InputBox>
        <button type="submit">회원가입</button>
      </Styled.Form>
    </Styled.Wrapper>
  );
}
export default SignSignUp;
