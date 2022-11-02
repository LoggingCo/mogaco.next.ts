import { userEditinfo } from 'libs/mock/user.data';
import { useState } from 'react';
import EditModalMogaco from './Mogaco/Mogaco';
import * as Styled from './Style';

function MyMogacoModal() {
  const [userInfo, setUserInfo] = useState(userEditinfo);

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
      <Styled.Content>
        {userInfo.mogaco.map((mogaco, index) => (
          <EditModalMogaco mogaco={mogaco} index={index} />
        ))}
      </Styled.Content>
    </Styled.Wrapper>
  );
}
export default MyMogacoModal;
