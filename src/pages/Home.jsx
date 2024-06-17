import css from './css/Home.module.scss';
import icon from '../assets/icon.svg';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Header />
      <div className={css.Home}>
        <div className={css.main}>
          <div>
            <div className={css.logo}>
              <div className={css.icon}>
                <img src={icon} alt="image" title="微型溫室 © PocketPlanet" />
              </div>
              <div className={css.title}>
                <h1>PocketPlanet</h1>
              </div>
            </div>
            <div className={css.into}>
              <p>
                基於數據分析,
              </p>
              <p>
                並以雲端顯示數據為主的專題網站。
              </p>
            </div>
            <a href="/data" title="查看數據" className={css.down}>
              <div className={css.font}>
                <p>開始參觀</p>
              </div>
              <div className={css.arrowdown}>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </a>
          </div>
        </div>
        {/* <div id="info" className={css.info}>
          <div className={css.idea}>

          </div>
          <div className={css.plant}>

          </div>
        </div> */}
      </div>
      <Footer />
    </>
  )
}