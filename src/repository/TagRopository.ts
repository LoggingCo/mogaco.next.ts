const TAG_KEY = 'currentTag';

const TagRepository = {
  setTags: (tag: string) => {
    // 기존 로컬 스토리지에 저장된 태그가 있는지 확인하는 플래그
    let existTag = false;

    // 기존 로컬 스토리지에 저장된 키워드가 있는지 확인
    const tagStoreage = JSON.parse(localStorage.getItem(TAG_KEY) as string);
    if (tagStoreage) {
      for (let i = 0; i < tagStoreage.length; i++) {
        // 있다면 순서를 바꾸어 리턴
        if (tagStoreage[i] === tag) {
          existTag = true;
          const tagStoreage_filter = tagStoreage.filter((item: any) => item !== tag);
          tagStoreage_filter.unshift(tag);
          return localStorage.setItem(TAG_KEY, JSON.stringify(tagStoreage_filter));
        }
      }

      // 반복문이 끝나고 기존 로컬 스토리지에 저장된 태그가 있다면 종료
      if (existTag) return;

      // 기존 로컬 스토리지에 저장된 태그 배열의 길이가 5라면 마지막 태그를 삭제하고 새로운 태그를 추가
      if (tagStoreage.length === 5) {
        const tagStoreage_copy = [...tagStoreage];
        tagStoreage_copy.pop();
        tagStoreage_copy.unshift(tag);
        return localStorage.setItem(TAG_KEY, JSON.stringify(tagStoreage_copy));
      }

      // 기존 로컬 스토리지에 중복된 키워드가 없고 길이가 5가 아니라면 그냥 추가
      const tagStoreage_copy = [...tagStoreage];
      tagStoreage_copy.unshift(tag);
      return localStorage.setItem(TAG_KEY, JSON.stringify(tagStoreage_copy));
    } else {
      // 기존 로컬 스토리지에 저장된 키워드가 없다면 새로운 키워드를 추가
      const tagStoreage_copy = [tag];
      return localStorage.setItem(TAG_KEY, JSON.stringify(tagStoreage_copy));
    }
  },

  getTags: () => {
    return JSON.parse(localStorage.getItem(TAG_KEY) as string);
  },

  removeTags: (tag: string) => {
    const tagStoreage = JSON.parse(localStorage.getItem(TAG_KEY) as string);
    const tagStoreage_filter = tagStoreage.filter((item: any) => item !== tag);
    return localStorage.setItem(TAG_KEY, JSON.stringify(tagStoreage_filter));
  },
};
export default TagRepository;
