import { useEffect, useState } from 'react';
import CommonHeader from '@components/common/header/CommonHeader';
import CommonSearchBar from '@components/common/searchBar/CommonSearchBar';
import CommonNav from '@components/common/navigation/CommonNav';
import CommonFooter from '@components/common/footer/CommonFooter';
import Card from './components/Card';
import styles from './styles/index.module.scss';
import axios from 'axios';
import type { CardDTO } from './types/card';

function idex() {
  const [imgUrls, setImgUrls] = useState([]);
  const getData = async () => {
    // Open api 호출
    const API_URL = 'https://api.unsplash.com/search/photos';
    const API_KEY = 'NYXW-zdx6m9ImTZ22XWLlmCgvueyOHshcDp1_LTM5bw';
    const PER_PAGE = 30;

    const searchValue = 'cat'; // 임시 검색어
    const pageValue = 100; // 임시 페이지
    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );

      console.log(res);

      if (res.status === 200) {
        setImgUrls(res.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cardList = imgUrls.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />;
  });

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
        <div className={styles.page__contents__imageBox}>{cardList}</div>
      </div>
      <CommonFooter />
    </div>
  );
}

export default idex;
