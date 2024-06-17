import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './css/Footer.module.scss';
import React, { useState, useEffect } from 'react';
import { faArrowRight, faChartArea, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/icon.svg';

export default function Footer() {

  const [Time, setTime] = useState(false);

  useEffect(() => {
    setTime(new Date().getFullYear());
  }, []);

  return (
    <footer className={css.Footer}>
      <div className={css.content}>
        <div className={css.logo}>
          <img src={logo} alt="LOGO" />
          <h2>微型世界智慧溫室</h2>
          <ul>
            <li><FontAwesomeIcon icon={faChartArea} /> 地區 <div>Taiwan</div></li>
            <li><FontAwesomeIcon icon={faPhone} /> 聯絡電話 <div>0966-208809</div></li>
            <li><FontAwesomeIcon icon={faLocationDot} /> 地址 <div>臺中市 太平區 東平路 18號</div></li>
          </ul>
        </div>
        <div className={css.open}>
          <ul>
            <li>
              <div>
                <p>關於</p>
                <ul>
                  <li>
                    <a href="/about">關於我們 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                  <li>
                    <a href="/about">我們的理念 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                </ul>
              </div>
              <div>
                <p>Open-Source</p>
                <ul>
                  <li title="前往 Website">
                    <a href="https://github.com/Raxytw/pocketplanet-world-web">Website <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                  <li title="前往 Raspberry Pi and Arduino">
                    <a href="https://github.com/pocketplanet/Micro-world-code">Raspi and Arduino <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <p>數據</p>
                <ul>
                  <li title="前往 數據">
                    <a href="/data">查看數據 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                  <li title="前往 控制台">
                    <a href="/control">控制台 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li>
              <div>
                <p>研究</p>
                <ul>
                  <li>
                    <a href="/#/about/hardware">硬體 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                  <li>
                    <a href="/#/about/app">軟體 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                  <li>
                    <a href="/#/about/plant">植物 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                  <li>
                    <a href="/#/about/data">數據 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                  <li>
                    <a href="/#/about/sensors">感測器 <FontAwesomeIcon icon={faArrowRight} className={css.arrow} /></a>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
      <div className={css.from}>
        <p>copyright &copy; {Time ? Time : 2022} by <a href="https://github.com/Raxytw" target='_blank'>Raxytw</a> 保留一切權利</p>
      </div>
    </footer>
  )
}