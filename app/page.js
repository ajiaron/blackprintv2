'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import styles from "../styles/page.module.scss";
import LogoAlt from '../public/assets/logoalt.svg'
import Navbar from "./components/Navbar";
import NavButton from "./components/NavButton";
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
import { FaWindowRestore } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { TbWaveSine } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import Slider from '@mui/material/Slider';
import Head from 'next/head';

const ServiceItem = ({title, subtext, image, isOpen, width, handleOpen}) => {
  function handlePress() {
    if (isOpen.length > 0 && isOpen === title) {
      handleOpen('', '')
    } else {
      handleOpen('', '')
      handleOpen(title, subtext)
    }
  }
  return (
    <motion.span className={[styles.servicesItem, (isOpen===title)&&styles.servicesItemActive].join(' ')} onClick={()=>width<=480&&handlePress()}>
        <div className={styles.servicesItemContent}>
          <div className={styles.servicesIconWrapper}>
            <div className={`${styles.servicesIcon} ${styles[image]}`}>

            </div>
          </div>
          {isOpen&&width>480&&
          <div className={styles.servicesItemTextWrapper}>
            <p className={styles.serviceTitleText}>
              {title}
            </p>
            <p className={styles.serviceSubtext}>
              {subtext}
            </p>
          </div>
          }
        </div>
    </motion.span>
  )
}
const ServicesPopout = ({title, subtext, isOpen, width}) => {
  return (
    <motion.div
    initial={{height:0, opacity:0, marginBottom: 0}}
    animate={{height:isOpen?120:0, opacity:1, marginBottom:isOpen?width>390?32:24:0,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
      }
    }}
    exit={{height:0, opacity:0, marginBottom:0,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
       // duration:.2
      }
    }}
    className={styles.servicesPopout}
    >
      {isOpen&&
      <motion.div className={styles.servicesItemTextWrapper}
      initial={{opacity:0}}
      animate={{opacity:(isOpen)?1:0,
        transition: {
          type: "spring",
          stiffness: 160,
          damping: 20,
          delay:.2
        }
      }}
      >
        <p className={styles.serviceTitleText}>
          {title}
        </p>
        <p className={styles.serviceSubtext}>
          {subtext}
        </p>
      </motion.div>
      }
    </motion.div>
  )
}
const TestimonialItem = ({name, title, subtext, image, side}) => {
  return (
    <div className={`${styles.testimonialItem} ${styles[side]}`}>
      <div className={styles.testimonialHeaderContainer}>
        <span className={styles.testimonialImage}>
          {image==="notion"?<FaWindowRestore size={22} className={styles.testimonialIcon}/>:
          image==="code"?<FaCode size={26} className={styles.testimonialIcon}/>:
          image==="assets"?<FaCodepen size={24} className={styles.testimonialIcon}/>:
          image==="analytics"?<TbWaveSine size={27} className={styles.testimonialIcon}/>:
          image==="revisions"?<FaPaintBrush size={24} className={styles.testimonialIcon}/>:
          <FaChartLine size={24} className={styles.testimonialIcon}/>}
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
          {subtext}
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
                  {subtext}
                </p>
            </div>
        </motion.div>
        }
    </span>
  )
}
export default function Home() {
  const googletag = process.env.NEXT_PUBLIC_GOOGLE_TAG;
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [showNavigation, setShowNavigation] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [processType, setProcessType] = useState("design");
  const [isOpen, setIsOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentSubtext, setCurrentSubtext] = useState('');
  const contentRef = useRef(null);
  function handleProcess(e) {
    setProcessType(e)
  }
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  function handleStripeLogin() {
    window.location.href = `https://billing.stripe.com/p/login/4gw5mD0xQ6ZFczm7ss`
  }
  function handleNavigate(val) {
    if (val === "terms") {
      window.location.href = `https://www.termsfeed.com/live/208e984c-90de-4a80-aef5-bca1c2f10e30`
    } else {
      window.location.href = `https://www.termsfeed.com/live/68f663b0-f207-4758-8a8a-e46da2cd3e60`
    }
  }
  function handleSocial(val) {
    window.location.href = val
  }
  function handleStripe(link) {
    window.location.href = link
  }
  function navigateBooking() {
    window.location.href = `https://calendly.com/blackprint-unlimited/30min`
  }
  function handleService(title, subtext) {
    setIsOpen(title)
    setCurrentTitle(title)
    setCurrentSubtext(subtext)
  }
    
  const { ref:topRef, inView: topInView} = useInView({
    threshold:1,
    triggerOnce:false
  });
      
  const { ref:bottomRef, inView: bottomInView} = useInView({
    threshold:.1,
    triggerOnce:false
  });
  useEffect(()=>{
    if (topInView || bottomInView) {

      setShowNavigation(false)
    } else {
      setShowNavigation(true)
    }
  }, [topInView, bottomInView])

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
    <>        
    <Head>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${googletag}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          console.log('Google Analytics script loaded');
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', ${googletag});
        `
      }}
    />
  </Head>
    <main className={styles.main} ref={contentRef}>
      <div style={{position:"relative"}} >
      <Navbar width={windowSize.width} contentRef={contentRef} scrollToId={(id)=>scrollToId(id)} />
      </div>

      <div className={styles.contentContainer} >
        <div className={styles.heroContentWrapper} id={"home"} ref={topRef}>
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
              {/*<div className={styles.heroPrintContainer} style={{opacity:.2}}/>*/
              (windowSize.width && windowSize.height)&&
              <Print width={windowSize.width} height={windowSize.height}/>}
            </div>
            <motion.div className={styles.heroTextContainer}
              initial={{opacity:0, y:24}}
              animate={{opacity:1, y:0}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 35,
              }}
            >
              <p className={styles.heroHeaderSubtext} style={{marginBottom:".925rem"}}>
                Building designs that inspire:
              </p>
              {(windowSize.width>=769)?
                 <motion.h1 className={styles.heroHeaderText}
                 initial={{opacity:0, y:24}}
                 animate={{opacity:1, y:0}}
                 transition={{
                   type: "spring",
                   stiffness: 200,
                   damping: 35,
                   delay: .1
                 }}>
                 If a blueprint is the{windowSize.width>1480||(windowSize.width>1082&&windowSize.width<=1280)?<br/>:<>&nbsp;</>} foundation, the 
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
                     delay:.35
                   }}
                   className={styles.highlight}/>
                   <p className={[styles.heroHeaderText, styles.heroHeaderTextAlt].join(' ')}>
                     Blackprint
                   </p>
                 </span> 
                 is everything else.&nbsp;
               </motion.h1>:
                <motion.h1 className={styles.heroHeaderText}
                initial={{opacity:0, y:24}}
                animate={{opacity:1, y:0}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 35,
                  delay: .1
                }}>
           
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
                    delay:.35
                  }}
                  className={styles.highlight}/>
                  <p className={[styles.heroHeaderText, styles.heroHeaderTextAlt].join(' ')}>
                    Blackprint
                  </p>
                </span> 
                is everything else.&nbsp;
              </motion.h1>
              }
              <motion.div className={styles.heroButtonContainer}
              initial={{opacity:0, y:24}}
              animate={{opacity:1, y:0}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 35,
                delay: .2
              }}>
                <span className={styles.heroStartButton} onClick={()=>scrollToId("pricing")}>
                  <p className={styles.buttonTextSmall}>
                    Get Started
                  </p>
                </span>
                <span className={styles.heroLearnButton} onClick={()=>navigateBooking()}>
                  <p className={styles.buttonTextSmall}>
                    Learn More
                  </p>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      <section className={styles.carouselSection}>
        <p className={styles.subheaderText}>
          Trusted by our partners {'&'} clients
        </p>
        <Carousel width={windowSize.width}/>
      </section>
      <section className={styles.catalogSection} id={"catalog"}>
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
      <section className={styles.processSection} id="process">
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
                  Schedule a consultation call and we’ll screen through your project. Our team will draft a specifications outline before proceeding with design.
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
                  Our design process begins with the site layout, followed by your assets and branding. Then, we’ll handle any revisions and copywriting necessary.
                  </p>
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
                    Development starts with implementing the core wireframe, ensuring consistency on all devices. We’ll integrate any services you need before deployment.
                  </p>
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
                Schedule a consultation call and we’ll screen through your project. Our team will draft a specifications outline before proceeding with design.
                </p>
              </span>
              <span className={styles.processTextContent} onClick={()=>handleProcess("design")}>
                <p className={[styles.processHeaderText, styles.processTextPink].join(' ')}>
                  Design {'&'} Revision
                </p>
                <p className={styles.processSubtext}>
                  Our design process begins with the site layout, followed by your assets and branding. Then, we’ll handle any revisions and copywriting necessary.
                </p>
              </span>
              <span className={styles.processTextContent} onClick={()=>handleProcess("development")}>
                <p className={[styles.processHeaderText, styles.processTextBlue].join(' ')}>
                  Development {'&'} Deployment
                </p>
                <p className={styles.processSubtext}>
                  Development starts with implementing the core wireframe, ensuring consistency on all devices. We’ll integrate any services you need before deployment.
                </p>
              </span>
            </div>
          </div>
          }
         <Process state={processType}/>
        </div>
      </section>
      <section className={styles.servicesSection} id={"services"}>
        <div className={styles.sectionHeaderContainer}>
          <p className={styles.sectionHeaderText}>
            Products &amp; Services
          </p>
          <p className={styles.subheaderText}>
            From design to deployment, see how Blackprint handles each and every project.
          </p>
        </div>
        <div className={styles.servicesContentContainer}>
          {(windowSize.width >= 1080 || (windowSize.width < 744 && windowSize.width > 480))?
          <>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Websites'} subtext={'Fully responsive web pages and full-stack applications.'} image={'laptop'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Mobile Applications'} subtext={'Bundled applications for both iOS and Android.'} image={'mobile'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Pitch Decks'} subtext={'Tailored and concise presentations showcasing your business.'} image={'speaker'} isOpen={true} width={windowSize.width}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Digital Flyers'} subtext={'Promotional graphics with your branding, for your audience.'} image={'bang'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Banners'} subtext={"Themed images for your business's social profiles."} image={'flag'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Infographics'} subtext={'Intuitive graphics to describe your processes.'} image={'bulb'} isOpen={true} width={windowSize.width}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Social Media Funnels'} subtext={'Tailored posts to convert followers into loyal customers.'} image={'heart'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Targeted Ads'} subtext={'Marketing towards your audience to increase conversion rates.'} image={'money'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'And More!'} subtext={'Get in touch, and we’ll see what else we can do for you!'} image={'stars'} isOpen={true} width={windowSize.width}/>
          </div>
          </>:
          (windowSize.width <= 480)?
          <>
          <motion.div className={styles.servicesRow}>
            <ServiceItem title={'Websites'} subtext={'Fully responsive web pages and full-stack applications.'} image={'laptop'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
            <ServiceItem title={'Mobile Applications'} subtext={'Bundled applications for both iOS and Android.'} image={'mobile'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
            <ServiceItem title={'Pitch Decks'} subtext={'Tailored and concise presentations showcasing your business.'} image={'speaker'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
          </motion.div>
            {
            <ServicesPopout title={currentTitle} subtext={currentSubtext} isOpen={isOpen==="Websites"||isOpen==="Mobile Applications"||isOpen==="Pitch Decks"} width={windowSize.width}/>
            }
          <motion.div className={styles.servicesRow}>
            <ServiceItem title={'Digital Flyers'} subtext={'Promotional graphics with your branding, for your audience.'} image={'bang'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
            <ServiceItem title={'Banners'} subtext={"Themed images for your business's social profiles."} image={'flag'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
            <ServiceItem title={'Infographics'} subtext={'Intuitive graphics to describe your processes.'} image={'bulb'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
          </motion.div>
            {
            <ServicesPopout title={currentTitle} subtext={currentSubtext}  isOpen={isOpen==="Digital Flyers"||isOpen==="Banners"||isOpen==="Infographics"} width={windowSize.width}/>
            }
          <motion.div className={styles.servicesRow}>
            <ServiceItem title={'Social Media Funnels'} subtext={'Tailored posts to convert followers into loyal customers.'} image={'heart'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
            <ServiceItem title={'Targeted Ads'} subtext={'Marketing towards your audience to increase conversion rates.'} image={'money'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
            <ServiceItem title={'And More!'} subtext={'Get in touch, and we’ll see what else we can do for you!'} image={'stars'} isOpen={isOpen} width={windowSize.width} handleOpen={(isOpen, title, subtext)=>handleService(isOpen, title, subtext)}/>
          </motion.div>
            {
            <ServicesPopout title={currentTitle} subtext={currentSubtext} isOpen={isOpen==="Social Media Funnels"||isOpen==="Targeted Ads"||isOpen==="And More!"} width={windowSize.width}/>
            }
          </>:
          <>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Websites'} subtext={'Fully responsive web pages and full-stack applications.'} image={'laptop'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Mobile Applications'} subtext={'We can bundle your applications for both iOS and Android.'} image={'mobile'} isOpen={true} width={windowSize.width}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Pitch Decks'} subtext={'Tailored and concise presentations showcasing your business.'} image={'speaker'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Digital Flyers'} subtext={'Promotional graphics with your branding, for your audience.'} image={'bang'} isOpen={true} width={windowSize.width}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Banners'} subtext={"Themed images for your business's social profiles."} image={'flag'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Infographics'} subtext={'Intuitive graphics to describe your processes.'} image={'bulb'} isOpen={true} width={windowSize.width}/>
          </div>
          <div className={styles.servicesRow}>
            <ServiceItem title={'Social Media Funnels'} subtext={'Tailored posts to convert followers into loyal customers.'} image={'heart'} isOpen={true} width={windowSize.width}/>
            <ServiceItem title={'Targeted Ads'} subtext={'Marketing towards your audience to increase conversion rates.'} image={'money'} isOpen={true} width={windowSize.width}/>
          </div>
          </>
          }
        </div>
      </section>
      <section className={styles.pricingSection} id={"pricing"}>
        <div className={[styles.sectionHeaderContainer, styles.pricingHeaderWrapper].join(' ')}>
          <p className={styles.sectionHeaderText}>
            Blackprint Pricing
          </p>
          <p className={styles.subheaderText}>
            Start your Blackprint subscription today to kickstart your business.
          </p>
          <span className={styles.appointmentButton} onClick={()=>navigateBooking()}>
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
                    $1,500
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
                <span className={styles.packageButton} onClick={()=>handleStripe("https://buy.stripe.com/aEUeVr6W5gaS8wg00e")}>
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
                    $2,500
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
                <span className={styles.packagePremiumButton} onClick={()=>handleStripe("https://buy.stripe.com/4gw00x0xH3o68wg00f")}>
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
                    3-Day Brand Startup
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
                    <p className={styles.pricingFeatureText} style={{fontWeight:"800", color:"#9f9f9f"}}>
                      72 hour delivery
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
                <span className={styles.packageButton} onClick={()=>navigateBooking()}>
                  <p className={styles.pricingButtonText}>
                    Learn More
                  </p>
                </span>  
              </div>       
            </div>
          </div>
        </div>

       
        <div className={styles.oneTimeContainer}>
            <a className={[styles.oneTimeText, styles.heroHeaderSubtext].join(' ')}
            color={"#fff" }href={"mailto:info@blackprint.in"}>
                For custom inquiries, contact us here.
            </a>
        </div>
        <div className={styles.pricingReferralContainer}>
          <div className={styles.pricingReferralOuter}>
            <div className={styles.pricingReferralInner}>
              <div className={styles.pricingReferralLeft}>
                <p className={styles.pricingTitleText}>
                  Refer a friend {'&'} earn a monthly commission {(windowSize.width>807)&&<span style={{display:"inline"}}><FaArrowRightLong size={18} color={"#fff"} style={{marginLeft:".625rem",alignItems:"flex-end", height:"fit-content", transform:"translateY(2px)"}}/>
                  </span>}
                </p>  
                <p className={styles.pricingSubtitleText} style={{lineHeight:"22px"}}>
                    <span style={{fontWeight:600}}>Apply here</span> for your own personalized referral code that you can share with your followers. 
                </p>
                {(windowSize.width<=1119)&&
                <a className={styles.packageReferralButton} style={{transform:"translateX(-1px)",marginTop:".375rem",maxWidth:(windowSize.width>768)?"15.625rem":"auto", width:(windowSize.width>768?"":"100%")}} onClick={()=>navigateBooking()} href="mailto:info@blackprint.in">
                  <p className={styles.pricingButtonText}>
                    Apply Today
                  </p>
                </a>
                }  
              </div>
              <div className={styles.pricingReferralRight}>
              {(windowSize.width>1120)&&
                <a className={styles.packageButton} style={{transform:"translateX(-1px)",marginTop:".375rem"}} onClick={()=>navigateBooking()} href="mailto:info@blackprint.in">
                  <p className={styles.pricingButtonText}>
                    Apply Today
                  </p>
                </a>
                }  
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className={styles.pricingSliderContainer}>
          <div className={styles.pricingReferralOuter} style={{paddingTop:"3rem"}}>
            <div className={styles.pricingSliderHeader}>
              <p className={styles.pricingTitleText}>
                  For one-time requests, enter your budget here.{(windowSize.width>807)&&<span style={{display:"inline"}}><FaArrowRightLong size={18} color={"#fff"} style={{marginLeft:".875rem",alignItems:"flex-end", height:"fit-content", transform:"translateY(2px)"}}/>
                  </span>}
              </p>  
            </div>
            <div className={styles.pricingSliderHeader}>
            <Slider defaultValue={30} aria-label="slider" marks valueLabelDisplay="auto"
              step={100} min={0} max={2500} sx={{ color: '#d9d9d9', marginTop:"0rem", width:"calc(100% - 20.625rem)" , alignSelf:"center"}}
            />
                <a className={styles.packageButton} style={{transform:"translateX(-1px) translateY(-1px)",marginTop:"0rem",backgroundColor:"#fff", color:"#000", alignSelf:"center"}} onClick={()=>navigateBooking()} href="mailto:info@blackprint.in">
                  <p className={styles.pricingButtonText}>
                    Submit Information
                  </p>
                </a>
            </div>

          </div>
        </div>
        */}

      </section>
      <section className={styles.testimonialSection} id={"testimonials"}>
        <div className={styles.sectionHeaderContainer}>
          <p className={styles.sectionHeaderText}>
            A bit more about us.
          </p>
          <p className={styles.subheaderText}>
            We&apos;re committed to offering value for all kinds of businesses, including yours.
          
          </p>
        </div>
        <div className={styles.testimonialContentContainer}>
          {(windowSize.width>1083 || windowSize.width <= 768)?
            <>
            {(windowSize.width> 768)&&
              <div className={[styles.testimonialEdge, styles.leftEdge].join(' ')}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Notion Task Management"} title={"Project Timelines"} subtext={"We use Notion’s task management platform to handle your projects, providing status updates, action items, and delivery deadlines for each of your requests."} image={"notion"} side={"itemLeftEdge"}/>
              <TestimonialItem name={"CRM and Analytics"} title={"External Integrations"} subtext={"We do our best to work with any existing infrastructure you might have, including CRM services, Domain Registrars, Google Analytics and any backend systems you have in place."} image={"analytics"} side={"itemLeftEdge"}/>
            </div>
            {(windowSize.width> 768)&&
              <div className={styles.testimonialEdge}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Code & No-Code"} title={"Application Support"} subtext={"Our team is capable of handling both application-based projects and single page websites. We’ll use common frameworks like React or Framer to get the job done."} image={"code"} side={"itemCenter"}/>
              <TestimonialItem name={"Hands-On Revisions"} title={"Interactive Design"} subtext={"We’ll give you access to the same Figma that we use to build your project. You’ll be able to request all revisions directly on the wireframe, and see what we’ve changed."} image={"revisions"} side={"itemCenter"}/>
            </div>
            {(windowSize.width> 768)&&
              <div className={styles.testimonialEdge}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Personalized Assets"} title={"Graphics & Branding"} subtext={"At Blackprint, our designers are committed to creating unique assets and graphics suited towards your brand. We take pride in our designs as you do with your business."} image={"assets"} side={"itemRightEdge"}/>
              <TestimonialItem name={"Scalable Packages"} title={"Built for Flexibility"} subtext={"If your current plan with Blackprint can't fulfill what your business needs, feel free to upgrade at any time. If your company is looking to scale, what we offer will scale accordingly."} image={"packages"} side={"itemRightEdge"}/>
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
              <TestimonialItem name={"Notion Task Management"} title={"Project Timelines"} subtext={"We use Notion’s task management platform to handle your projects, providing status updates, action items, and delivery deadlines for each of your requests."} image={"notion"} side={"itemLeftEdge"}/>
              <TestimonialItem name={"CRM and Analytics"} title={"External Integrations"} subtext={"We do our best to work with any existing infrastructure you might have, including CRM services, Domain Registrars, Google Analytics and any backend systems you have in place."} image={"analytics"} side={"itemLeftEdge"}/>
              <TestimonialItem name={"Code & No-Code"} title={"Application Support"} subtext={"Our team is capable of handling both application-based projects and single page websites. We’ll use common frameworks like React or Framer to get the job done."} image={"code"} side={"itemLeftEdge"}/>
            </div>
            {
              <div className={styles.testimonialEdge}/>
            }
            <div className={styles.testimonialColumn}>
              <TestimonialItem name={"Hands-On Revisions"} title={"Interactive Design"} subtext={"We’ll give you access to the same Figma that we use to build your project. You’ll be able to request all revisions directly on the wireframe, and see what we’ve changed."} image={"revisions"} side={"itemRightEdge"}/>
              <TestimonialItem name={"Personalized Assets"} title={"Graphics & Branding"} subtext={"At Blackprint, our designers are committed to creating unique assets and graphics suited towards your brand. We take pride in our designs as you do with your business."} image={"assets"} side={"itemCenter"}/>
              <TestimonialItem name={"Scalable Packages"} title={"Built for Flexibility"} subtext={"If your current plan with Blackprint can't fulfill what your business needs, feel free to upgrade at any time. If your company is looking to scale, what we offer will scale accordingly."} image={"packages"} side={"itemCenter"}/>
            </div>
            {
              <div className={styles.testimonialEdge}/>
            }
            </>
          }
        </div>
      </section>
      <section className={styles.faqsSection} id={"faqs"}>
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
            <FaqsItem title={"Why choose Blackprint over other design agencies?"} subtext={"Less stress, work done faster, transform your ideas into reality. With a full team of designers and developers, we are well versed in all kinds of digital products and media."}/>
            <FaqsItem title={"Why not hire a full-time designer?"} subtext={"The average designer is paid over six figures. You save over 90% of this cost when purchasing the standard plan. We undercharge and over-provide."}/>
            <FaqsItem title={"Who are the designers?"} subtext={"We have a team of passionate people experienced in all kinds of design. From flyers to websites, video editing to mobile apps, we’ve worked on it all."}/>
            <FaqsItem title={"Does Blackprint offer any refunds?"} subtext={"Due to the high cost and time investment of each project, we unfortunately cannot offer refunds."}/>
            <FaqsItem title={"What if I don’t like the design?"} subtext={"We will continue to rework the design based on your revisions until you’re 100% satisfied."}/>
            <FaqsItem title={"Are there any financing options for the design work?"} subtext={"Currently, we do not have any financing options. However, we may reconsider as custom inquiries increase."}/>
            <FaqsItem title={"What programs would Blackprint use for my product or service?"} subtext={"We use a wide variety of tools depending on the project. Figma is used across all projects, but we may use a combination of Next.js and Vercel for websites, React Native for mobile applications, Illustrator for graphics, etc."}/>
            <FaqsItem title={"How does the pause feature work?"} subtext={"If you’re satisfied with the work you’ve received and have no more revisions for the current billing cycle, feel free to pause your subscription until you need us!"}/>
          </div>
      </section>
      <section className={styles.footerSection} id={"footer"}>
          <div className={styles.footerContentContainer}>
            <div className={styles.footerContent}>
              <div className={styles.footerTextContainer}>
                <p className={styles.sectionHeaderText}>
                See if Blackprint is{windowSize.width<=413&&<br/>} for{windowSize.width<=480&&windowSize.width>413&&<br/>} you today.
                </p>
                {
                <p className={styles.footerSubheader}>
                {(windowSize.width <= 480)?"":"It all starts with design."} Book a consultation {(windowSize.width>390)&&"call"} with us{(windowSize.width<=728)?",":" today,"}<br/>
                 and we’ll get your business branded the way you want.
                </p>
                }
              </div>
              <div className={styles.footerButtonContainer}>
                <span className={styles.footerStartButton} onClick={()=>scrollToId("pricing")}>
                  <p className={styles.footerButtonText}>
                    Get Started
                  </p>
                </span>
                <span className={styles.footerLearnButton} onClick={()=>navigateBooking()}>
                  <p className={styles.footerButtonText}>
                    Learn More
                  </p>
                </span>
              </div>
            </div>
            {(windowSize.width <= 768)&&
               <div className={styles.footerSmallContainer}>
                  <div className={styles.footerSmallRow}>
                  <span className={styles.footerNavText} onClick={()=>scrollToId("catalog")}>
                    Recent Work
                  </span>
                  <span className={styles.footerNavText} onClick={()=>scrollToId("pricing")}>
                    Pricing
                  </span>
                  <span className={styles.footerNavText} onClick={()=>scrollToId("process")}>
                    Our Process
                  </span>
                  <span className={styles.footerNavText} onClick={()=>handleStripeLogin()}>
                    Login
                  </span>
                </div>
                <div className={styles.footerSmallRow}>
                  <a className={styles.footerNavText} href={"mailto:info@blackprint.in"}>
                    Contact Us
                  </a>
                  <span className={styles.footerNavText} onClick={()=>handleNavigate("terms")}>
                    Terms of Service
                  </span>
                  <span className={styles.footerNavText} onClick={()=>handleNavigate("privacy")}>
                    Privacy Policy
                  </span>
                </div>

               </div>
              }
          </div>
          <div className={styles.footerNavigationContainer}  ref={bottomRef}>
            <span className={[styles.logoContainer, styles.footerLogoContainer].join(' ')}>
              <LogoAlt className={[styles.logoImage, styles.footerLogo].join(' ')} onClick={()=>scrollToId("home")}/>

              <span className={styles.footerLogoText} onClick={()=>scrollToId("home")}>
                Blackprint
              </span>
              
              {(windowSize.width < 1025 && windowSize.width>768)&&
              <div style={{display:"flex"}} className={styles.footerStubContainer}>
                <span style={{padding:"0", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", color:'#959595', fontSize:"14px"}}>
                 © 2024
               </span>
                <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.instagram.com/blackprint.unlimited/")}/>
                <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.linkedin.com/company/blackprint-agency/")}/>

              </div>
             }
            </span>
            {(windowSize.width > 1024)?
            <>
            <span className={styles.footerNavText} onClick={()=>scrollToId("catalog")}>
              Recent Work
            </span>
            <span className={styles.footerNavText} onClick={()=>scrollToId("pricing")}>
              Pricing
            </span>
            <span className={styles.footerNavText} onClick={()=>handleStripeLogin()}>
              Login
            </span>
            <span className={styles.footerNavText} onClick={()=>handleNavigate("terms")}>
              Terms of Service
            </span>
            <span className={styles.footerNavText} onClick={()=>handleNavigate("privacy")}>
              Privacy Policy
            </span>
            <span className={styles.footerTrademarkText}>
               © 2024
            </span>
            <div className={styles.footerIconContainer}>
            <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.instagram.com/blackprint.design/")}/>
            <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.linkedin.com/company/blackprint-agency/")}/>
            </div>
          
            </>:
            (windowSize.width > 768)?
            <div className={styles.footerContainerAlt}>
              <div className={styles.footerColumn}>
                <p className={styles.footerNavText} style={{color:"#fff"}}onClick={()=>handleNavigate("terms")}>
                  Services
                </p>
                <span className={styles.footerNavText} onClick={()=>scrollToId("catalog")}>
                  Recent Work
                </span>
                <span className={styles.footerNavText} onClick={()=>scrollToId("pricing")}>
                  Pricing
                </span>
                <span className={styles.footerNavText} onClick={()=>scrollToId("process")}>
                  Our Process
                </span>
                <span className={styles.footerNavText} onClick={()=>scrollToId("faqs")}>
                  FAQ&apos;s
                </span>
              </div>
              <div className={styles.footerColumn}>
                <p className={styles.footerNavText} style={{color:"#fff"}}onClick={()=>handleNavigate("terms")}>
                  Company
                </p>
                <span className={styles.footerNavText} onClick={()=>handleStripeLogin()}>
                  Client Login
                </span>
                <a className={styles.footerNavText} href="mailto:info@blackprint.in">
                  Contact Us
                </a>
                <span className={styles.footerNavText} onClick={()=>handleNavigate("terms")}>
                  Terms of Service
                </span>
                <span className={styles.footerNavText} onClick={()=>handleNavigate("privacy")}>
                  Privacy Policy
                </span>
              </div>
            </div>:
            <div style={{display:"flex"}} className={styles.footerStubContainer}>
              {(windowSize.width > 480)&&
              <span style={{padding:"0", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", color:'#959595', fontSize:"14px"}}>
               © 2024
             </span>
              }
              <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.instagram.com/blackprint.design/")}/>
              <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.linkedin.com/company/blackprint-agency/")}/>

            </div>
            }
          </div>
      </section>
      </div>
    </main>
    </>
  );
}
