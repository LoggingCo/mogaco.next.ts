import ApiError from '@/apis/error';
import useInputs from '@/hooks/Common/useInputs';
import TokenRepository from '@/repository/TokenRepository';
import UserRepository from '@/repository/UserRepositroy';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as Styeld from './Style';

interface Form {
  email: string;
  password: string;
}

function SignLogin() {
  const router = useRouter();
  const [{ email, password }, onChangeForm] = useInputs<Form>({
    email: '',
    password: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('/api/user/login', { email, password })
      .then((res) => {
        if (res.status === 200) {
          TokenRepository.setToken(res.data.token);
          UserRepository.setUser({
            name: res.data.name,
            level: res.data.level,
          });
          router.push('/room-list');
        }
      })
      .catch((err) => {
        new ApiError(err.response.data.message, err.response);
      });
  };

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
        <button>로그인</button>
        <Styeld.Link>
          아직 모가코 회원이 아니닌가요? <span>모가코와 함께하기</span>
        </Styeld.Link>
      </Styeld.Form>
    </Styeld.Wrapper>
  );
}
export default SignLogin;
