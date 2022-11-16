import { AuthService } from '@/apis';
import ApiError from '@/apis/error';
import useInputs from '@/hooks/Common/useInputs';
import TokenRepository from '@/repository/TokenRepository';
import UserRepository from '@/repository/UserRepositroy';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Styeld from './Style';

interface Form {
  email: string;
  password: string;
}

function SignLogin({ onClickSignUp }: any) {
  const router = useRouter();
  const [{ email, password }, onChangeForm] = useInputs<Form>({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await AuthService.login({ data: { email, password } });
      if (res.status === 200) {
        TokenRepository.setToken(res.data.token);
        UserRepository.setUser({
          name: res.data.name,
          level: res.data.level,
        });
        router.push('/room-list');
      }
    } catch (err: any) {
      if (err) {
        setIsError(true);
        alert('아이디 또는 비밀번호를 확인해주세요');
      }
    }
  };

  useEffect(() => {
    if (isError) {
      setIsError(false);
    }
  }, [email, password]);

  return (
    <Styeld.Wrapper>
      <Styeld.Form onSubmit={onSubmit}>
        <Styeld.InputBox>
          <input name={'email'} onChange={onChangeForm} placeholder={'이메일 입력하세요'} />
          <span>이메일</span>
        </Styeld.InputBox>
        <Styeld.InputBox>
          <input
            name={'password'}
            type="password"
            onChange={onChangeForm}
            placeholder={'비밀번호를 입력하세요'}
          />
          <span>비밀번호</span>
        </Styeld.InputBox>
        <Styeld.Error error={isError}>아이디 또는 비밀번호를 확인인해주세요</Styeld.Error>
        <button>로그인</button>
        <Styeld.Find>
          <Link href="/findPassword">
            <span>가입한 이메일로 비밀번호 찾기</span>
          </Link>
        </Styeld.Find>
        <Styeld.Link>
          아직 모가코 회원이 아니닌가요? <span onClick={onClickSignUp}>모가코와 함께하기</span>
        </Styeld.Link>
      </Styeld.Form>
    </Styeld.Wrapper>
  );
}
export default SignLogin;
