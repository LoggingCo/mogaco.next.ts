import { useState } from 'react';
import * as Styled from './Style';

function MyMogacoModal() {
  const [userInfo, setUserInfo] = useState({
    name: '중금뵹아리',
    email: 'korpg95274@gmail.com',
    password: '************',
  });

  const [editState, setEditState] = useState({});

  return (
    <Styled.Wrapper>
      <Styled.inputBox>
        <p>
          <span>별명</span>
          <input value={userInfo.name} />
          <button>수정</button>
        </p>
        <p>
          <span>이메일</span>
          <input value={userInfo.email} />
          <button>수정</button>
        </p>
        <p>
          <span>비밀번호</span>
          <input value={userInfo.password} />
          <button>수정</button>
        </p>
      </Styled.inputBox>
    </Styled.Wrapper>
  );
}
export default MyMogacoModal;
