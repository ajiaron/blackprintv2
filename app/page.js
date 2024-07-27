'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../styles/page.module.scss";
import Logo from '../public/assets/logo.svg'
import Navbar from "./components/Navbar";
import Process from "./components/Process";
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
          {
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
          </div>}
        </div>
      </section>
      <section className={styles.processSection}>
        <div className={styles.sectionHeaderContainer}>
          <p className={styles.sectionHeaderText}>
            Blackprint&apos;s Process
          </p>
          <p className={styles.subheaderText}>
            From design to deployment, see how Blackprint handles each and every project.
          </p>
        </div>
        <div className={styles.processContentContainer}>
          <div className={styles.processContentLeft}>
            <div className={styles.processContentLineContainer}>
              <div className={styles.processGreenContainer}>
                <div className={styles.processGreen}/>
                {
                  <svg width="2" height="148" viewBox="0 0 2 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V147" stroke="url(#paint0_linear_731_7434)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V147" stroke="#3CB371" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7434" x1="1.5" y1="17.348" x2="1.5" y2="116.858" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#3CB371"/>
                  <stop offset="1" stop-color="#3CB371" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                }
              </div>
              <div className={styles.processPinkContainer}>
                <div className={styles.processPink}/>
                {
                  <svg width="2" height="148" viewBox="0 0 2 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V147" stroke="url(#paint0_linear_731_7435)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V147" stroke="#B970C5" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7435" x1="1.5" y1="18.3742" x2="1.5" y2="118.758" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#B970C5"/>
                  <stop offset="1" stop-color="#59365F" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                }
              </div>
              <div className={styles.processBlueContainer}>
                <div className={styles.processBlue}/>
                {
                  <svg width="2" height="104" viewBox="0 0 2 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V103" stroke="url(#paint0_linear_731_7436)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V103" stroke="#3399FF" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7436" x1="1.5" y1="24.697" x2="1.5" y2="127.727" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#3399FF"/>
                  <stop offset="1" stop-color="#1F5C99" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                }
              </div>
            </div>
            <div className={styles.processTextContainer}>
              <div className={styles.processTextContent}>
                <p className={styles.processHeaderText}>
                  Consultation
                </p>
                <p className={styles.processSubtext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada facilisis arcu, non pharetra quam aliquet vel. Donec et urna velit.
                </p>
              </div>
              <div className={styles.processTextContent}>
                <p className={styles.processHeaderText}>
                  Design {'&'} Revision
                </p>
                <p className={styles.processSubtext}>
                  Nam quam massa, consectetur sit amet elit ut, consectetur tristique nulla. Nunc fermentum lacinia tellus, nec dapibus est sollicitudin in.                </p>
              </div>
              <div className={styles.processTextContent}>
                <p className={styles.processHeaderText}>
                  Development {'&'} Deployment
                </p>
                <p className={styles.processSubtext}>
                  Vestibulum sagittis mauris non sapien gravida, quis tincidunt diam vulputate. Integer augue ex, finibus nec leo condimentum, eleifend convallis massa.                </p>
              </div>
            </div>
          </div>
         <Process/>
        </div>
      </section>
    </main>
  );
}
