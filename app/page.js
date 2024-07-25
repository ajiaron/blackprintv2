'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../styles/page.module.scss";
import Logo from '../public/assets/logo.svg'
import Navbar from "./components/Navbar";
export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'wya...';
      } else {
        document.title = 'BLACKPRINT';
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return (
    <main className={styles.main}>
      <div style={{position:"relative"}}>
      <Navbar/>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroCanvasContainer}>
            <div className={styles.heroPrintContainer}/>
            <div className={styles.heroTextContainer}>
              <p className={styles.heroHeaderSubtext} style={{marginBottom:".925rem"}}>
                Building designs that inspire:
              </p>
              <p className={styles.heroHeaderText}>
                If a blueprint is the&nbsp; foundation, the 
                <span className={styles.heroHighlight}>
                  <p className={[styles.heroHeaderText, styles.heroHeaderTextAlt].join(' ')}>
                    Blackprint
                  </p>
                </span> 
                is everything else.&nbsp;
              </p>
              <div className={styles.heroButtonContainer}>
                <span className={styles.heroStartButton}>
                  <p className={styles.buttonTextSmall}>
                    Get Started
                  </p>
                </span>
                <span className={styles.heroLearnButton}>
                  <p className={styles.buttonTextSmall}>
                    Learn More
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <section className={styles.carouselSection}>
        <p className={styles.subheaderText}>
          Trusted by our partners {'&'} clients
        </p>
        <div className={styles.carouselContentContainer}>
          <span className={styles.circleocIcon}/>
          <span className={styles.nebulaIcon}/>
          <span className={styles.dashbillIcon}/>
          <span className={styles.ksigIcon}/>
          <span className={styles.peakingduckIcon}/>
          <span className={styles.legacyIcon}/>
          <span className={styles.trukaIcon}/>
        </div>
      </section>
    </main>
  );
}
