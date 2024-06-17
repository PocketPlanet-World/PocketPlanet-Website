import css from './css/Loader.module.scss';
import wave1 from '../assets/wave/wave-1.svg';
import wave2 from '../assets/wave/wave-2.svg';
import wave3 from '../assets/wave/wave-3.svg';
import wave4 from '../assets/wave/wave-4.svg';
import wave5 from '../assets/wave/wave-5.svg';
import { useEffect, useRef, useState } from 'react';

export default function Loader() {

  const WaveRef = useRef(null);
  const [Status, setStatus] = useState(false);

  useEffect(() => {
    const waveref = WaveRef.current;
    waveref.addEventListener('animationend', () => {
      waveref.style.display = 'none';
      setStatus(true);
    })
  }, [])

  return (
    <section className={`${css.Loader} ${Status && css.hide}`}>
      <div className={css.startwaves} ref={WaveRef}>
        <div class={css.waves}>
          <img src={wave1} />
          <img src={wave2} />
          <img src={wave3} />
          <img src={wave4} />
          <img src={wave5} className={css.shape} />
        </div>
      </div>
      <div className={css.centertext}>
        <span>PocketPlanet</span>
        <span>PocketPlanet</span>
      </div>
    </section>
  )
}