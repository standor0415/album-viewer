import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CommonNav.module.scss';
import navJson from './nav.json';
import { useRecoilState } from 'recoil';
import { pageState } from '@recoil/atoms/pageState';
import { searchState } from '@recoil/atoms/searchState';
import { useLocation } from 'react-router-dom';

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}
function CommonNav() {
  const location = useLocation();
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);
  const [page, setPage] = useRecoilState(pageState);
  const [search, setSearch] = useRecoilState(searchState);
  // useState로 선언한 반응성을 가진 데이터를 기반으로 반복 UI 랜더링을 한다.

  useEffect(() => {
    navigation.forEach((nav: Navigation) => {
      nav.isActive = false;

      if (
        nav.path === location.pathname ||
        location.pathname.includes(nav.path)
      ) {
        nav.isActive = true;
        setSearch(nav.searchValue);
        setPage(1);
      }
    });
    setNavigation([...navigation]);
  }, [location.pathname]);

  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link
        className={
          item.isActive
            ? `${styles.navigation__menu} ${styles.active}`
            : `${styles.navigation__menu} ${styles.inactive}`
        }
        key={item.path}
        to={item.path}
      >
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default CommonNav;
