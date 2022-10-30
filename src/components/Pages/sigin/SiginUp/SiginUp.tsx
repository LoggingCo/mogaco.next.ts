import * as Styled from './Style';

function SignSignUp() {
  return (
    <Styled.Wrapper>
      <Styled.Form>
        <Styled.InputBox>
          <input />
          <button>인증</button>
          <span>이메일</span>
        </Styled.InputBox>
        <Styled.accessInputBox>
          <input />
          <button>인증하기</button>
        </Styled.accessInputBox>
        <Styled.InputBox>
          <input />
          <span>비밀번호</span>
        </Styled.InputBox>
        <Styled.InputBox>
          <input />
          <span>확인</span>
        </Styled.InputBox>
        <button type="submit">회원가입</button>
      </Styled.Form>
    </Styled.Wrapper>
  );
}
export default SignSignUp;
