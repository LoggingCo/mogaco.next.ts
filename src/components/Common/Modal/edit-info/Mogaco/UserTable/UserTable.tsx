import * as Styled from './Style';

function EditinfoUserTable({ data, master }: any) {
  return (
    <Styled.Wrapper>
      <Styled.Table>
        <thead>
          <tr>
            <th>이름 </th>
            <th>등급 </th>
            <th>모가코 타임</th>
            <th>최근 모가코</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: any, index: number) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.level}</td>
              <td>{user.time}</td>
              <td>{user.logined}</td>
              <td>
                <button>채팅</button>
                {master && (
                  <>
                    <button>추방</button>
                    <button>위임</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
}
export default EditinfoUserTable;
