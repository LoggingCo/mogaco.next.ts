import useInput from '@/hooks/Common/useInput';
import TagRepository from '@/repository/TagRopository';
import { PoPularCategoryhData } from '@mocks/data/search.data';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import * as Styled from './Style';

function SidebarSearch() {
  const [PopularCate, setPopularCate] = useState(PoPularCategoryhData);
  const [selectedCate, setSelectedCate] = useState<Array<string>>([]);
  const [keyword, onChanageKeyword, setKeword] = useInput('');

  useEffect(() => {
    const currentTag: Array<string> = TagRepository.getTags();
    setSelectedCate(currentTag);
  }, []);

  const onAddTagRepository = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.currentTarget;
    TagRepository.setTags(innerText);
    const currentTag: Array<string> = TagRepository.getTags();
    setSelectedCate(currentTag);
  }, []);

  const onDeleteTagRepository = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.currentTarget;
    TagRepository.removeTags(innerText.slice(0, -1));
    const currentTag: Array<string> = TagRepository.getTags();
    setSelectedCate(currentTag);
  }, []);

  const onClickSearchBtn = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      TagRepository.setTags(keyword);
      const currentTag: Array<string> = TagRepository.getTags();
      setSelectedCate(currentTag);
      setKeword('');
    },
    [keyword],
  );

  return (
    <Styled.Wrapper>
      <h1>🔥 인기 카테고리</h1>
      <Styled.List>
        {PopularCate.map((cate: any, index: number) => (
          <Styled.Item key={index}>
            <span onClick={onAddTagRepository}>{cate}</span>
          </Styled.Item>
        ))}
      </Styled.List>
      <Styled.Form onSubmit={onClickSearchBtn}>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={keyword}
          onChange={onChanageKeyword}
        />
        <button>검색</button>
      </Styled.Form>
      <Styled.Categroy>
        {selectedCate &&
          selectedCate.length > 0 &&
          selectedCate.map((cate: string, index: number) => (
            <span key={index} onClick={onDeleteTagRepository}>
              {cate}
              <button>x</button>
            </span>
          ))}
      </Styled.Categroy>
    </Styled.Wrapper>
  );
}
export default SidebarSearch;
