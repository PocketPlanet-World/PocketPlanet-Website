import React from 'react';
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import css from './css/About.module.scss';
import Aa from '../assets/Json/about.json';

export default function About() {
  return (
    <>
      <Header />
      <main className={css.About}>
        {Aa.map((item, key) => (
          <div key={key}>
            {item.type === 'title' &&
              <h1>{item.text}</h1>
            }
            {(item.view !== "") &&
              <img src={item.view} alt="圖片" title={item.text} />
            }
            {item.content && item.content.map((item, key) => ( // Added a check for item.subtitle
              <>
                {item.type === 'subtitle' &&
                  <h3 key={key}>{item.text}</h3>
                }
                {item.content && item.content.map((item, key) => (
                  <>
                    {item.type === 'text' &&
                      <p key={key}>{item.text}</p>
                    }
                    {item.type === 'subsubtitle' &&
                      <>
                        <h4 key={key}>
                          {item.text}
                        </h4>
                        {item.content && item.content.map((item, key) => (
                          <p key={key}>{item.text}</p>
                        ))}
                      </>
                    }
                  </>
                ))}
              </>
            ))}
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}
