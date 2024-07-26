'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../styles/page.module.scss";
import Logo from '../public/assets/logo.svg'
import Navbar from "./components/Navbar";
import Bvexterior from "../public/assets/bvexterior.png"
import Mansion from "../public/assets/mansion.png"
import Dwiw from "../public/assets/dwiw.png"
import Poker from "../public/assets/trukamansion.png"
import Peakingduck from "../public/assets/peakingduck.png"
import Truka from "../public/assets/truka.png"
import Tradesmark from "../public/assets/tradesmark.png"
import Blackprint from "../public/assets/blackprint.png"


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
              <h1 className={styles.heroHeaderText}>
                If a blueprint is the&nbsp; foundation, the 
                <span className={styles.heroHighlight}>
                  <p className={[styles.heroHeaderText, styles.heroHeaderTextAlt].join(' ')}>
                    Blackprint
                  </p>
                </span> 
                is everything else.&nbsp;
              </h1>
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
      <section className={styles.catalogSection}>
        <div className={styles.sectionHeaderContainer}>
          <p className={styles.sectionHeaderText}>
            Designs By Blackprint
          </p>
          <p className={styles.subheaderText}>
            From websites to graphics, we make sure your project stands out from the rest.
          </p>
        </div>

        <div className={styles.catalogContentContainer}>
          <div style={{position:"relative"}}>
            <div className={styles.catalogCover}/>
          </div>
          <div className={styles.catalogContent}>
            <div className={styles.catalogColumn}>
              <Image src={Bvexterior} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
              <Image src={Mansion} objectFit="cover" alt="truka mansion" className={styles.catalogImage}/>
            </div>
            <Image src={Dwiw} objectFit="cover" alt="dwiw" className={styles.catalogImageLarge}/>
            <div className={styles.catalogColumn}>
              <Image src={Poker} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
              <div className={styles.catalogRow}>
                <Image src={Peakingduck} objectFit="cover" alt="peakingduck" className={styles.catalogImageSmall}/>
                <Image src={Truka} objectFit="cover" alt="truka" className={styles.catalogImageSmall}/>
              </div>
            </div>
            <div className={styles.catalogColumn}>
              <Image src={Tradesmark} objectFit="cover" alt="tradesmark" className={styles.catalogImage}/>
              <Image src={Blackprint} objectFit="cover" alt="blackprint" className={styles.catalogImage}/>
            </div>
          </div>
       
        </div>
        
      </section>
    </main>
  );
}
