'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import styles from "../styles/page.module.scss";
import LogoAlt from '../public/assets/logoalt.svg'
import Navbar from "./components/Navbar";
import Carousel from './components/Carousel'
import Catalog from "./components/Catalog";
import Print from "./components/Print";
import Process from "./components/Process";
import Bvexterior from "../public/assets/bvexterior.png"
import Mansion from "../public/assets/mansion.png"
import Dwiw from "../public/assets/dwiw.png"
import Poker from "../public/assets/trukamansion.png"
import Peakingduck from "../public/assets/peakingduck.png"
import Truka from "../public/assets/truka.png"
import Tradesmark from "../public/assets/tradesmark.png"
import Blackprint from "../public/assets/blackprint.png"
import { FaBars } from "react-icons/fa";


const ServiceItem = ({title, subtext, image}) => {
  return (
    <div className={styles.servicesItem}>
        <div className={styles.servicesItemContent}>
          <div className={styles.servicesIconWrapper}>
            <div className={`${styles.servicesIcon} ${styles[image]}`}>

            </div>
          </div>
          <div className={styles.servicesItemTextWrapper}>
            <p className={styles.serviceTitleText}>
              {title}
            </p>
            <p className={styles.serviceSubtext}>
              {subtext}
            </p>
          </div>
        </div>
    </div>
  )
}
const TestimonialItem = ({name, title, subtext, image, side}) => {
  return (
    <div className={`${styles.testimonialItem} ${styles[side]}`}>
      <div className={styles.testimonialHeaderContainer}>
        <span className={styles.testimonialImage}>
          {/* image here */}
        </span>
        <div className={styles.testimonialTitleContainer}>
          <p className={styles.testimonialHeader}>
            {name}
          </p>
          <p className={styles.testimonialSubheader}>
            {title}
          </p>
        </div>
      </div>
      <div className={styles.testimonialSubtextContainer}>
        <p className={styles.testimonialSubtext}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>
    </div>
  )
}
const FaqsItem = ({title, subtext}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <span className={styles.faqsItem} onClick={()=>setIsActive(!isActive)}>
      <span className={styles.faqsContent}>
        <p className={styles.faqsHeader}>
          {title}
        </p>
        <span className={styles.faqsDropdown}>
          {
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.05078 1.58398L8.97863 8.87565L16.9065 1.58398" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          }
        </span>
      </span>
      {
        <motion.div 
            initial={{height:0}}
            transition= {{
                type: "spring",
                stiffness:220,
                damping:30,
                duration:.05
            }}
            animate={{height:(isActive)?"auto":0}}
            exit={{height:0}}>
            <div style={{paddingBottom:"1.5rem"}}>
                <p className={styles.faqsSubtext} style={{textAlign:"left"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            
        </motion.div>
        }
    </span>
  )
}
export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [animation, setAnimation] = useState(false);
  const [process, setProcess] = useState("design");
  function handleProcess(e) {
    setProcess(e)
  }
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
      <Navbar width={windowSize.width}/>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroCanvasContainer}>
            <div className={styles.heroPrintContainer}
            initial={{width:"100%", opacity:1}}
            animate={{width:"100%", opacity:1}}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay:.35
            }}>
              {/*<div className={styles.heroPrintContainer} style={{opacity:.25}}/>*/}
            </div>
            <div className={styles.heroTextContainer}>
              <p className={styles.heroHeaderSubtext} style={{marginBottom:".925rem"}}>
                Building designs that inspire:
              </p>
              {(windowSize.width<769)?
                <h1 className={styles.heroHeaderText}>
                If a blueprint is the foundation, the 
                <span className={styles.heroHighlight}>
                  <motion.span 
                  initial={{width:0,                    
                    paddingLeft:0,
                    paddingRight:0}}
                  animate={{
                    width:"100%",
                    paddingLeft:10,
                    paddingRight:10
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 35,
                    delay:.1
                  }}
                  className={styles.highlight}/>
                  <p className={[styles.heroHeaderText, styles.heroHeaderTextAlt].join(' ')}>
                    Blackprint
                  </p>
                </span> 
                is everything else.&nbsp;
              </h1>:
              <h1 className={styles.heroHeaderText}>
                If a blueprint is the{windowSize.width>1082&&windowSize.width<=1280?<br/>:<>&nbsp;</>} foundation, the 
                <span className={styles.heroHighlight}>
                  <motion.span 
                  initial={{width:0,                    
                    paddingLeft:0,
                    paddingRight:0}}
                  animate={{
                    width:"100%",
                    paddingLeft:10,
                    paddingRight:10
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 35,
                    delay:.1
                  }}
                  className={styles.highlight}/>
                  <p className={[styles.heroHeaderText, styles.heroHeaderTextAlt].join(' ')}>
                    Blackprint
                  </p>
                </span> 
                is everything else.&nbsp;
              </h1>
              }
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
        

      <section className={styles.carouselSection}>
        <p className={styles.subheaderText}>
          Trusted by our partners {'&'} clients
        </p>
        <Carousel width={windowSize.width}/>
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

        <Catalog width={windowSize.width}/>
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
          {(windowSize.width <= 1439)?
          <div className={styles.processContentLeft}>
            
            <div className={styles.processTextContainer}>
              
              <div className={styles.processTextContainerAlt}>
                <div className={styles.processGreenContainer}>
                  <div className={styles.processBlue}/>
                  {(windowSize.width>1024)&&  
                    <svg width="2" height={`96`} viewBox={`0 0 2 96`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1V147" stroke="url(#paint0_linear_731_7434)" stroke-linecap="round" stroke-dasharray="5 5"/>
                    <path d="M1 1V147" stroke="#3399FF" stroke-linecap="round" stroke-dasharray="5 5"/>
                    <defs>
                    <linearGradient id="paint0_linear_731_7434" x1="1.5" y1="17.348" x2="1.5" y2="116.858" gradientUnits="userSpaceOnUse">
                    <stop offset="0.75" stop-color="#3399FF"/>
                    <stop offset="1" stop-color="#3399FF" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  }
                </div>
                <span className={styles.processTextContent} onClick={()=>handleProcess("consultation")}>
                  <p className={[styles.processHeaderText, styles.processTextGreen].join(' ')}>
                    Consultation
                  </p>
                  <p className={styles.processSubtext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada facilisis arcu, non pharetra quam aliquet vel. Donec et urna velit.
                  </p>
                </span>
              </div>
              <div className={styles.processTextContainerAlt}>
                <div className={styles.processGreenContainer}>
                  <div className={styles.processGreen}/>
                  {(windowSize.width > 1024)&&
                  <svg width="2" height={`96`} viewBox={`0 0 2 96`} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V147" stroke="url(#paint0_linear_731_7435)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V147" stroke="#3CB371" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7435" x1="1.5" y1="18.3742" x2="1.5" y2="118.758" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#3CB371"/>
                  <stop offset="1" stop-color="#59365F" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  }
                </div>
                <span className={styles.processTextContent} onClick={()=>handleProcess("design")}>
                  <p className={[styles.processHeaderText, styles.processTextPink].join(' ')}>
                    Design {'&'} Revision
                  </p>
                  <p className={styles.processSubtext}>
                    Nam quam massa, consectetur sit amet elit ut, consectetur tristique nulla. Nunc fermentum lacinia tellus, nec dapibus est sollicitudin in.                </p>
                </span>
              </div>
              <div className={styles.processTextContainerAlt}>
              <div className={styles.processBlueContainer}>
                  <div className={styles.processPink}/>
                  {(windowSize.width > 1024)&&
                  <svg width="2" height={`96`} viewBox={`0 0 2 96`} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V103" stroke="url(#paint0_linear_731_7436)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V103" stroke="#B970C5" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7436" x1="1.5" y1="24.697" x2="1.5" y2="127.727" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#B970C5"/>
                  <stop offset="1" stop-color="#1F5C99" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  }
                </div>
                <span className={styles.processTextContent} onClick={()=>handleProcess("development")}>
                  <p className={[styles.processHeaderText, styles.processTextBlue].join(' ')}>
                    Development {'&'} Deployment
                  </p>
                  <p className={styles.processSubtext}>
                    Vestibulum sagittis mauris non sapien gravida, quis tincidunt diam vulputate. Integer augue ex, finibus nec leo condimentum, eleifend convallis massa.                </p>
                </span>
              </div>
            </div>
          </div>
          :   
          <div className={styles.processContentLeft}>
            <div className={styles.processContentLineContainer}>
              <div className={styles.processGreenContainer}>
                <div className={styles.processBlue}/>
                {
                  <svg width="2" height="148" viewBox="0 0 2 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V147" stroke="url(#paint0_linear_731_7434)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V147" stroke="#3399FF" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7434" x1="1.5" y1="17.348" x2="1.5" y2="116.858" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#3399FF"/>
                  <stop offset="1" stop-color="#3399FF" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                }
              </div>
              <div className={styles.processPinkContainer}>
                <div className={styles.processGreen}/>
                {
                  <svg width="2" height="148" viewBox="0 0 2 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V147" stroke="url(#paint0_linear_731_7435)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V147" stroke="#3CB371" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7435" x1="1.5" y1="18.3742" x2="1.5" y2="118.758" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#3CB371"/>
                  <stop offset="1" stop-color="#59365F" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                }
              </div>
              <div className={styles.processBlueContainer}>
                <div className={styles.processPink}/>
                {
                  <svg width="2" height="104" viewBox="0 0 2 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V103" stroke="url(#paint0_linear_731_7436)" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="M1 1V103" stroke="#ç" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <defs>
                  <linearGradient id="paint0_linear_731_7436" x1="1.5" y1="24.697" x2="1.5" y2="127.727" gradientUnits="userSpaceOnUse">
                  <stop offset="0.75" stop-color="#B970C5"/>
                  <stop offset="1" stop-color="#1F5C99" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                }
              </div>
            </div>
            <div className={styles.processTextContainer}>
              <span className={styles.processTextContent} onClick={()=>handleProcess("consultation")}>
                <p className={[styles.processHeaderText, styles.processTextGreen].join(' ')}>
                  Consultation
                </p>
                <p className={styles.processSubtext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada facilisis arcu, non pharetra quam aliquet vel. Donec et urna velit.
                </p>
              </span>
              <span className={styles.processTextContent} onClick={()=>handleProcess("design")}>
                <p className={[styles.processHeaderText, styles.processTextPink].join(' ')}>
                  Design {'&'} Revision
                </p>
                <p className={styles.processSubtext}>
                  Nam quam massa, consectetur sit amet elit ut, consectetur tristique nulla. Nunc fermentum lacinia tellus, nec dapibus est sollicitudin in.                </p>
              </span>
              <span className={styles.processTextContent} onClick={()=>handleProcess("development")}>
                <p className={[styles.processHeaderText, styles.processTextBlue].join(' ')}>
                  Development {'&'} Deployment
                </p>
                <p className={styles.processSubtext}>
                  Vestibulum sagittis mauris non sapien gravida, quis tincidunt diam vulputate. Integer augue ex, finibus nec leo condimentum, eleifend convallis massa.                </p>
              </span>
            </div>
          </div>
          }
         <Process state={process}/>
        </div>
          
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeaderContainer}>
          <p className={styles.sectionHeaderText}>
            Products &amp; Services
          </p>
          <p className={styles.subheaderText}>
            From design to deployment, see how Blackprint handles each and every project.
          </p>
        </div>
        <div className={styles.servicesContentContainer}>
          {(windowSize.width >= 1080 || windowSize.width < 744)?
          <>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Websites'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'laptop'}/>
            <ServiceItem title={'Mobile Applications'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'mobile'}/>
            <ServiceItem title={'Pitch Decks'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'speaker'}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Digital Flyers'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'bang'}/>
            <ServiceItem title={'Banners'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'flag'}/>
            <ServiceItem title={'Infographics'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'bulb'}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Social Media Funnels'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'heart'}/>
            <ServiceItem title={'Targeted Ads'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'money'}/>
            <ServiceItem title={'And More!'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'stars'}/>
          </div>
          </>:
          <>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Websites'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'laptop'}/>
            <ServiceItem title={'Mobile Applications'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'mobile'}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Pitch Decks'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'speaker'}/>
            <ServiceItem title={'Digital Flyers'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'bang'}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Banners'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'flag'}/>
            <ServiceItem title={'Infographics'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'bulb'}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Social Media Funnels'} subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={'heart'}/>
            <ServiceItem title={'Targeted Ads'} subtext={'Morbi scelerisque id ante quis euismod. Vivamus ut arcu metus.'} image={'money'}/>
          </div>
          </>
          }
        </div>
      </section>
      <section className={styles.pricingSection}>
        <div className={[styles.sectionHeaderContainer, styles.pricingHeaderWrapper].join(' ')}>
          <p className={styles.sectionHeaderText}>
            Blackprint Pricing
          </p>
          <p className={styles.subheaderText}>
            Start your Blackprint subscription today to kickstart your business.
          </p>
          <span className={styles.appointmentButton}>
            <p className={styles.appointmentButtonText}>
                Book an appointment
            </p>
            {
            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7466 5.44194C16.9907 5.19786 16.9907 4.80214 16.7466 4.55806L12.7692 0.580583C12.5251 0.336505 12.1293 0.336505 11.8853 0.580583C11.6412 0.82466 11.6412 1.22039 11.8853 1.46447L15.4208 5L11.8853 8.53553C11.6412 8.77961 11.6412 9.17534 11.8853 9.41942C12.1293 9.6635 12.5251 9.6635 12.7692 9.41942L16.7466 5.44194ZM0.5 5.625H16.3047V4.375H0.5V5.625Z" fill="url(#paint0_linear_731_7335)"/>
              <defs>
              <linearGradient id="paint0_linear_731_7335" x1="0.5" y1="5.5" x2="16.3047" y2="5.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#43C27B"/>
              <stop offset="1" stop-color="#44C0C0"/>
              </linearGradient>
              </defs>
            </svg>
            }
          </span>
        </div>
        <div className={styles.pricingContentContainer}>
            <div className={styles.pricingPackageOuter}>
              <div className={styles.pricingPackageInner}>
                
                <div className={styles.packageContents}>
                  <div className={styles.packageHeaderContainer}>
                    <p className={styles.pricingTitleText}>
                      Standard
                    </p>
                    <p className={styles.pricingSubtitleText}>
                      For individuals and teams that reach 
                      a smaller target audience.
                    </p>
                  </div>
              
                  <div className={styles.packageFigureContainer}>
                    <p className={styles.pricingFigureText}>
                      $600
                    </p>
                    <p className={styles.pricingMonthText}>
                      &nbsp;/mo
                    </p>
                  </div>
                  <div className={styles.packageChecklist}>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        One request at a time
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Targeted niche research
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Website maintenance
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Cancel anytime
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Average 48 hour delivery
                      </p>
                    </span>
                  </div>
                  <span className={styles.packageButton}>
                    <p className={styles.pricingButtonText}>
                      Subscribe Now
                    </p>
                  </span>  
                </div>              
              </div>
            </div>
            <div className={styles.premiumPackageOuter}>
              <div className={styles.premiumPackageInner}>
                <div className={styles.packageContents}>
                  <div className={styles.packageHeaderContainer}>
                    {(windowSize.width > 768 && windowSize.width <= 1120)?
                    <div className={styles.premiumHeader}>
                      <p className={styles.pricingTitleText}>
                        Professional
                      </p>
                      <span className={styles.premiumHeaderContent}>
                        <div className={styles.premiumStar}/>
                        <p className={styles.mostPopularText}>
                          Most Popular
                        </p>
                      </span>
                    </div>:
                     <p className={styles.pricingTitleText}>
                       Professional
                     </p>
                    }
                    <p className={styles.pricingSubtitleText}>
                      For individuals and businesses that are
                      servicing a larger target audience.
                    </p>
                  </div>
              
                  <div className={styles.packageFigureContainer}>
                    <p className={styles.pricingFigureText}>
                      $1,000
                    </p>
                    <p className={styles.pricingMonthText}>
                      &nbsp;/mo
                    </p>
                  </div>
                  <div className={styles.packageChecklist}>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Two request at a time
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Targeted niche research
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Website maintenance
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Cancel anytime
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Average 48 hour delivery
                      </p>
                    </span>
                  </div>
                  <span className={styles.packagePremiumButton}>
                    <p className={styles.pricingButtonText} style={{fontWeight:"570"}}>
                      Subscribe Now
                    </p>
                  </span>  
                </div>            
              </div>
            </div>
            <div className={styles.pricingPackageOuter}>
              <div className={styles.pricingPackageInner}>
                <div className={styles.packageContents}>
                  <div className={styles.packageHeaderContainer}>
                    <p className={styles.pricingTitleText}>
                      Brand Start-Up
                    </p>
                    <p className={styles.pricingSubtitleText}>
                      For individuals looking to build their
                      brand quickly and efficiently. 
                    </p>
                  </div>
              
                  <div className={styles.packageFigureContainer}>
                    <p className={styles.pricingFigureText}>
                      Contact
                    </p>
                    <p className={styles.pricingMonthText}>
                    </p>
                  </div>
                  <div className={styles.packageChecklist}>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        One time delivery
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Targeted niche research
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Guaranteed full brand developed
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        Average 1-2 week delivery
                      </p>
                    </span>
                    <span className={styles.packageChecklistItem}>
                      {
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.96527L5 9.9375L14 1" stroke="#959595" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                      }
                      <p className={styles.pricingFeatureText}>
                        1 Site + Branding Design Kit
                      </p>
                    </span>
                  </div>
                  <span className={styles.packageButton}>
                    <p className={styles.pricingButtonText}>
                      Learn More
                    </p>
                  </span>  
                </div>       
              </div>
            </div>
        </div>
      </section>
      <section className={styles.testimonialSection}>
        <div className={styles.sectionHeaderContainer}>
          <p className={styles.sectionHeaderText}>
            Hear it from others.
          </p>
          <p className={styles.subheaderText}>
            Don&apos;t take our word for it. See what our clients have to say about us.
          </p>
        </div>
        <div className={styles.testimonialContentContainer}>
          {(windowSize.width>1083 || windowSize.width <= 768)?
            <>
            {(windowSize.width> 768)&&
              <div className={[styles.testimonialEdge, styles.leftEdge].join(' ')}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Leo Valentino"} title={"Founder of Truka LLC"} subtext={""} image={""} side={"itemLeftEdge"}/>
              <TestimonialItem name={"Founder Name"} title={"Founder Role & Title"} subtext={""} image={""} side={"itemLeftEdge"}/>
            </div>
            {(windowSize.width> 768)&&
              <div className={styles.testimonialEdge}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Eric Nguyen"} title={"Founder of BVExterior"} subtext={""} image={""} side={"itemCenter"}/>
              <TestimonialItem name={"Founder Name"} title={"Founder Role & Title"} subtext={""} image={""} side={"itemCenter"}/>
            </div>
            {(windowSize.width> 768)&&
              <div className={styles.testimonialEdge}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Gabriel Gudino Jr."} title={"Founder of TradesMark"} subtext={""} image={""} side={"itemRightEdge"}/>
              <TestimonialItem name={"Founder Name"} title={"Founder Role & Title"} subtext={""} image={""} side={"itemRightEdge"}/>
            </div>
            {(windowSize.width> 768)&&
              <div className={[styles.testimonialEdge, styles.rightEdge].join(' ')}/>
            }
            </>:
            <>
            {
              <div className={[styles.testimonialEdge, styles.leftEdge].join(' ')}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Leo Valentino"} title={"Founder of Truka LLC"} subtext={""} image={""} side={"itemLeftEdge"}/>
              <TestimonialItem name={"Eric Nguyen"} title={"Founder of BVExterior"} subtext={""} image={""} side={"itemLeftEdge"}/>
              <TestimonialItem name={"Founder Name"} title={"Founder Role & Title"} subtext={""} image={""} side={"itemLeftEdge"}/>
            </div>
            {
              <div className={styles.testimonialEdge}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Gabriel Gudino Jr."} title={"Founder of TradesMark"} subtext={""} image={""} side={"itemRightEdge"}/>
              <TestimonialItem name={"Founder Name"} title={"Founder Role & Title"} subtext={""} image={""} side={"itemCenter"}/>
              <TestimonialItem name={"Founder Name"} title={"Founder Role & Title"} subtext={""} image={""} side={"itemCenter"}/>
            </div>
            {
              <div className={styles.testimonialEdge}/>
            }
            </>
          }
        </div>
      </section>
      <section className={styles.faqsSection}>
        <div className={styles.sectionHeaderContainer}>
          <p className={styles.sectionHeaderText}>
            Frequently Asked Questions
          </p>
          {(windowSize.width <= 480)?
          <p className={styles.faqsSubheader}>
            These are the most commonly asked questions about Blackprint.<br/>
          </p>
          :
          <p className={styles.faqsSubheader}>
            These are the most commonly asked questions about Blackprint.<br/>
            Can’t find what you’re looking for? <span style={{textDecoration:"var(--subheader-color) dotted underline"}}>Book a call.</span>       
          </p>
          }
        </div>
          <div className={styles.faqsContentContainer}>
            <FaqsItem title={"Why choose Blackprint over other design agencies?"} subtext={""}/>
            <FaqsItem title={"Why can’t I just hire a full-time designer?"} subtext={""}/>
            <FaqsItem title={"Who are the designers?"} subtext={""}/>
            <FaqsItem title={"Does Blackprint offer any refunds?"} subtext={""}/>
            <FaqsItem title={"What if I don’t like the design?"} subtext={""}/>
            <FaqsItem title={"Are there any financing options for the design work?"} subtext={""}/>
            <FaqsItem title={"What programs would Blackprint use for my product or service?"} subtext={""}/>
            <FaqsItem title={"How does the pause feature work?"} subtext={""}/>

          </div>
      </section>
      <section className={styles.footerSection}>
          <div className={styles.footerContentContainer}>
            <div className={styles.footerContent}>
              <div className={styles.footerTextContainer}>
                <p className={styles.sectionHeaderText}>
                See if Blackprint is{windowSize.width<=413&&<br/>} for{windowSize.width<=480&&windowSize.width>413&&<br/>} you today.
                </p>
                {
                <p className={[styles.faqsSubheader, styles.footerSubheader].join(' ')}>
                {(windowSize.width <= 480)?"":"It all starts with design."} Book a consultation call with us{(windowSize.width<=728)?",":" today,"}<br/>
                 and we’ll get your business branded the way you want.
                </p>
                }
              </div>
              <div className={styles.footerButtonContainer}>
                <span className={styles.footerStartButton}>
                  <p className={styles.footerButtonText}>
                    Get Started
                  </p>
                </span>
                <span className={styles.footerLearnButton}>
                  <p className={styles.footerButtonText}>
                    Learn More
                  </p>
                </span>
              </div>
          
            </div>
            {(windowSize.width <= 768)&&
               <div className={styles.footerSmallContainer}>
                <div className={styles.footerSmallRow}>
                  <span className={styles.footerNavText}>
                    Recent Work
                  </span>
                  <span className={styles.footerNavText}>
                    Pricing
                  </span>
                  <span className={styles.footerNavText}>
                    Our Process
                  </span>
                  <span className={styles.footerNavText}>
                    FAQs
                  </span>
                </div>

                <div className={styles.footerSmallRow}>
       
                  <span className={styles.footerNavText}>
                    Contact Us
                  </span>
                  
                  <span className={styles.footerNavText}>
                    Terms of Service
                  </span>
                  <span className={styles.footerNavText}>
                    Privacy Policy
                  </span>
                </div>
               </div>


              }
          </div>
          <div className={styles.footerNavigationContainer}>
            <div className={styles.logoContainer}>
              <LogoAlt className={styles.logoImage}/>
              <p className={styles.footerLogoText}>
                blackprint
              </p>
            </div>
            {(windowSize.width > 1024)?
            <>
            <span className={styles.footerNavText}>
              Recent Work
            </span>
            <span className={styles.footerNavText}>
              Pricing
            </span>
            <span className={styles.footerNavText}>
              Our Process
            </span>
            <span className={styles.footerNavText}>
              FAQs
            </span>
            <span className={styles.footerNavText}>
              Terms of Service
            </span>
            <span className={styles.footerNavText}>
              Privacy Policy
            </span>
            </>:
            <span style={{padding:"0", display:"flex", alignItems:"center", justifyContent:"flex-end", color:'#959595', fontSize:"13.5px"}}>
              © 2024-2024
            </span>
  
            }
          </div>
      </section>
      </div>
    </main>
  );
}
