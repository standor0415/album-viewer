import { useEffect, useState } from 'react';
import styles from './DetailDialog.module.scss';
import type { CardDTO } from '@/pages/index/types/card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-simple-toasts/dist/theme/dark.css';

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
}
function DetailDialog({ data, handleDialog }: Props) {
  const [bookmark, setBookmark] = useState<boolean>(false);
  const closeDialog = () => {
    handleDialog(false);
  };
  const addBookmark = (selected: CardDTO) => {
    setBookmark(true);

    const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'));
    if (!getLocalStorage || getLocalStorage === null) {
      localStorage.setItem('bookmark', JSON.stringify([selected]));
      toast('해당 이미지를 북마크에 저장하였습니다.✅');
    } else {
      // 여기 수정!
      if (
        getLocalStorage.findIndex(
          (item: CardDTO) => item.id === selected.id
        ) !== -1
      ) {
        toast('이미 북마크에 존재하는 이미지입니다.❌');
      } else {
        const res = [...getLocalStorage];
        res.push(selected);
        localStorage.setItem('bookmark', JSON.stringify(res));
        toast('해당 이미지를 북마크에 저장하였습니다.✅');
      }
    }
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'));

    if (
      getLocalStorage &&
      getLocalStorage.findIndex((item: CardDTO) => item.id === data.id) > -1
    ) {
      setBookmark(true);
    } else if (!getLocalStorage) return;
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button} onClick={closeDialog}>
              {/* Icon 사용 */}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28 + 'px' }}
              >
                close
              </span>
            </button>
            <img
              src={data.user.profile_image.small}
              alt="사진 작가 프로필 사진"
              className={styles.close__authorImage}
            />
            <span className={styles.close__authorName}>{data.user.name}</span>
          </div>
          <div className={styles.bookmark}>
            <button
              className={styles.bookmark__button}
              onClick={() => addBookmark(data)}
            >
              {bookmark === false ? (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 16 + 'px' }}
                >
                  favorite
                </span>
              ) : (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 16 + 'px', color: 'red' }}
                >
                  favorite
                </span>
              )}
              {/* Icon 사용 */}
              북마크
            </button>
            <button className={styles.bookmark__button}>
              {/* Icon 사용 */}
              다운로드
            </button>
          </div>
        </div>
        <div className={styles.container__dialog__body}>
          <img
            src={data.urls.small}
            alt="상세 이미지"
            className={styles.image}
          />
        </div>
        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>이미지 크기</span>
              <span className={styles.infoBox__item__value}>
                {data.width} x {data.height}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>업로드</span>
              <span className={styles.infoBox__item__value}>
                {data.created_at.split('T')[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                마지막 업데이트
              </span>
              <span className={styles.infoBox__item__value}>
                {data.updated_at.split('T')[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>다운로드</span>
              <span className={styles.infoBox__item__value}>{data.likes}</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            <div className={styles.tagBox__tag}>
              API에서 태그 데이터가 사라졌다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDialog;
