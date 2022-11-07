import { PoPularCategoryhData } from 'libs/mock/search.data';
import { useState } from 'react';
import * as Styled from './Style';

function SidebarSearch() {
  const [PopularCate, setPopularCate] = useState(PoPularCategoryhData);
  const [selectedCate, setSelectedCate] = useState(['개발', '취미']);

  return (
    <Styled.Wrapper>
      <h1>🔥 인기 카테고리</h1>
      <Styled.List>
        {PopularCate.map((cate: any, index: number) => (
          <Styled.Item key={index}>
            <span>{cate}</span>
          </Styled.Item>
        ))}
      </Styled.List>
      <Styled.Form>
        <input type="text" placeholder="검색어를 입력해주세요" />
        <button>검색</button>
      </Styled.Form>
      <Styled.Categroy>
        {selectedCate.map((cate: string, index: number) => (
          <span key={index}>
            {cate}
            <button>x</button>
          </span>
        ))}
      </Styled.Categroy>
    </Styled.Wrapper>
  );
}
export default SidebarSearch;
