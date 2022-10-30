import * as Styeld from './Style';

function SignLogin() {
  return (
    <Styeld.Wrapper>
      <Styeld.Form>
        <Styeld.InputBox>
          <input />
          <span>이메일</span>
        </Styeld.InputBox>
        <Styeld.InputBox>
          <input type="password" />
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
