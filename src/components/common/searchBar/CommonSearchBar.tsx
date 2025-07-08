import styles from './CommonSearchBar.module.scss';

function CommonSearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색해주세요."
          className={styles.searchBar__search__input}
        />
        <img
          src="src/assets/icons/icon-search.svg"
          alt="검색"
          className={styles.searchBar__search__icon}
        />
      </div>
    </div>
  );
}

export default CommonSearchBar;
