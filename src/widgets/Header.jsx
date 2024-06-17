import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './css/Header.module.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { faBookmark, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  const local = useLocation();

  const [View, setView] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100 && scrollPosition < (documentHeight - windowHeight - 100)) {
        setView(true);
      } else {
        setView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'drak' : 'light');
  // };

  return (
    <header className={`${css.Header} ${View && css.active}`}>
      <div className={css.DynBar}>
        <ul>
          <a href="/" className={local.pathname === '/' | local.pathname === '/home' && css.active}>
            <FontAwesomeIcon icon={faHouse} />
            <p>首頁</p>
          </a>
          <a href="/data" className={local.pathname === '/data' && css.active}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>即時數據</p>
          </a>
          <a href="/about" className={local.pathname === '/about' && css.active}>
            <FontAwesomeIcon icon={faBookmark} />
            <p>關於</p>
          </a>
        </ul>
      </div>
    </header>
  )
}