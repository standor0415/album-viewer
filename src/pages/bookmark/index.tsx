import { useState, useEffect } from 'react';
import CommonHeader from '@components/common/header/CommonHeader';
import styles from './styles/index.module.scss';
import Card from './components/Card';
import type { CardDTO } from '@/pages/index/types/card';

function index() {
  const [data, setData] = useState([]);
  const getData = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'));
    if (getLocalStorage || getLocalStorage !== null) {
      setData(getLocalStorage);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.page}>
      <CommonHeader />
      <main className={styles.page__contents}>
        {data.length === 0 ? (
          <div className={styles.page__contents__empty}>
            <p>북마크한 이미지가 없습니다.</p>
          </div>
        ) : (
          data.map((item: CardDTO) => <Card key={item.id} prop={item} />)
        )}
      </main>
    </div>
  );
}

export default index;
