import CommonHeader from '@components/common/header/CommonHeader';
import CommonSearchBar from '@components/common/searchBar/CommonSearchBar';
import CommonNav from '@components/common/navigation/CommonNav';
import styles from './styles/index.module.scss';

function idex() {
  return (
    <div className={styles.page}>
      <CommonHeader />
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}></div>
        {/* 공통 footer UI 부분 */}
      </div>
    </div>
  );
}

export default idex;
