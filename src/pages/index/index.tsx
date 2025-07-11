import { useState, useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { imageData } from '@recoil/selectors/imageSelectors';
import CommonHeader from '@components/common/header/CommonHeader';
import CommonSearchBar from '@components/common/searchBar/CommonSearchBar';
import CommonNav from '@components/common/navigation/CommonNav';
import CommonFooter from '@components/common/footer/CommonFooter';
import Card from './components/Card';
import styles from './styles/index.module.scss';
import type { CardDTO } from './types/card';
import DetailDialog from '@components/common/dialog/DetailDialog';
import Loading from './components/Loading';

function index() {
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false); // Dialog 열기 닫기 상태

  const CARD_LIST = useMemo(() => {
    // imgSelector.state 값은 hasValue, hasError, loading 총 3가지 값이 있다.
    if (imgSelector.state === 'hasValue') {
      const res = imgSelector.contents.results.map((card: CardDTO) => {
        return (
          <Card
            data={card}
            key={card.id}
            handleDialog={setOpen}
            handleSetData={setImgData}
          />
        );
      });
      return res;
    } else {
      return <Loading />;
    }
  }, [imgSelector]);

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
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      <CommonFooter />
      {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
    </div>
  );
}

export default index;
