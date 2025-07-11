import styles from './CommonSearchBar.module.scss';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchState } from '@recoil/atoms/searchState';
import { pageState } from '@recoil/atoms/pageState';

function CommonSearchBar() {
  const [text, setText] = useState('');
  const [page, setPage] = useRecoilState(pageState);
  const [search, setSearch] = useRecoilState(searchState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const onSearch = () => {
    if (text === '') {
      setSearch('Dog');
      setPage(1);
    } else {
      setSearch(text);
      setPage(1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (text === '') {
        setSearch('Dog');
        setPage(1);
      } else {
        setSearch(text);
        setPage(1);
      }
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색해주세요."
          className={styles.searchBar__search__input}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src="src/assets/icons/icon-search.svg"
          alt="검색"
          className={styles.searchBar__search__icon}
          onClick={onSearch}
        />
      </div>
    </div>
  );
}

export default CommonSearchBar;
