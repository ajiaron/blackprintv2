'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import Link from "next/link";
import CatalogItem from "../components/CatalogItem";
import styles from "../../styles/page.module.scss";
import catalogStyles from "../../styles/catalog.module.scss";
import LogoAlt from '../../public/assets/logoalt.svg'
import CatalogHeader from "../../public/assets/catalogheader.svg"
import CanvasFigure from "../../public/assets/resized.svg"
import Navbar from "../components/Navbar";
import Logo from '../../public/assets/logo.svg'
import Head from 'next/head';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
    const [animation, setAnimation] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    function handleSocial(val) {
        window.location.href = val
    } 
    const [showNavigation, setShowNavigation] = useState(false);
    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const contentRef = useRef(null);
    useEffect(()=> {
        setAnimation(true)
    }, [])
    return (
    <div className={styles.main} ref={contentRef}>

        <div className={catalogStyles.catalogPageHeaderWrapper}>
            {
            <div className={catalogStyles.catalogPageHeader} style={{position:"relative"}}>
               {/* <div className={[`${catalogStyles.catalogBlob} ${animation ? catalogStyles.animate : ''}`]} id={'home'}></div>*/}
                <svg
                style={{
                    color: "#3CB371",
                    position: "absolute",
                    transform: "translateY(4.25rem)"
                }}
                viewBox="0 0 1440 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute w-full -top-px shrink-0 -z-10 fadeSlideDown"
                >
                <mask id="path-1-inside-1_414_5526" fill="white">
                    <path d="M0 0H1440V181H0V0Z"></path>
                </mask>
                <path
                    d="M0 0H1440V181H0V0Z"
                    fill="url(#paint0_linear_414_5526)"
                    fillOpacity="0.22"
                ></path>
                <path
                    d="M0 2H1440V-2H0V2Z"
                    fill="url(#paint1_linear_414_5526)"
                    mask="url(#path-1-inside-1_414_5526)"
                ></path>
                <defs>
                    <linearGradient
                    id="paint0_linear_414_5526"
                    x1="720"
                    y1="0"
                    x2="720"
                    y2="181"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="currentColor"></stop>
                    <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint1_linear_414_5526"
                    x1="0"
                    y1="90.5"
                    x2="1440"
                    y2="90.5"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="currentColor" stopOpacity="0"></stop>
                    <stop offset="0.395" stopColor="currentColor"></stop>
                    <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
                </svg>
            </div>
            }
            <div className={catalogStyles.navbarContentContainer} style={{height:"4.25rem", paddingTop:".25rem",marginTop:"0", width:"100%", paddingLeft:"6.75rem",
                paddingRight:"5.75rem",
                 zIndex:1}}>
                <Link className={styles.logoContainer} href={"/"}>
                    <Logo className={styles.logoImage}/>
                    <p className={styles.navbarLogoText} style={{color:"#fff", paddingTop:".125rem"}}>
                        Blackprint
                    </p>
                </Link>
                <div className={catalogStyles.navbarContentLinks}>
                    <Link href={"/"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:"#909090"}}>
                            Recent Work
                        </p>
                    </Link>
                     <Link href={"/"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:"#909090"}}>
                            Pricing
                        </p>
                    </Link>
                    <Link href={"/"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:"#909090"}}>
                            Our Process
                        </p>
                    </Link>
                    <Link href={"/"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:"#909090"}}>
                            FAQs
                        </p>
                    </Link>
                    <Link href={"/"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:"#909090"}}>
                            Contact
                        </p>
                    </Link>
                </div>
                <div className={styles.logoContainer} style={{opacity:"0"}}>
                    <Logo className={styles.logoImage}/>
                    <p className={styles.navbarLogoText} style={{color:"#fff", paddingTop:".125rem"}}>
                        Blackprint
                    </p>
                </div>

                
            </div>
            <div className={catalogStyles.catalogPageHeaderContainer}>
                <p className={catalogStyles.catalogHeaderText}>
                    Designs By Blackprint
                </p>
                <p className={catalogStyles.catalogHeaderSubtext}>
                    From websites to graphics, we make sure your project stands out from the rest.
                </p>
            </div>
        </div>
        <div className={catalogStyles.catalogPageContent}>
            <div className={catalogStyles.catalogPageContentRow}>
                <CatalogItem title={"Product Work 1"} category={"Product Title Header"} description={"WEBSITE / FUNNEL PAGE"} perRow={3}/>
                <CatalogItem title={"Product Work 2"} category={"Product Title Header"} description={"MARKETING / STRATEGY"} perRow={3}/>
                <CatalogItem title={"Product Work 3"} category={"Product Title Header"} description={"WEBSITE / E-COMMERCE PLATFORM"} perRow={3}/>
            </div>
            <div className={catalogStyles.catalogPageContentRow}>
                <CatalogItem title={"Product Work 4"} category={"Product Title Header"} description={"WEBSITE / FUNNEL PAGE"} perRow={3}/>
                <CatalogItem title={"Product Work 5"} category={"Product Title Header"} description={"MARKETING / STRATEGY"} perRow={3}/>
                <CatalogItem title={"Product Work 6"} category={"Product Title Header"} description={"WEBSITE / E-COMMERCE PLATFORM"} perRow={3}/>
            </div>
        </div>
         <section className={styles.footerSection} id={"footer"}>

          <div className={styles.footerNavigationContainer}>
            <span className={[styles.logoContainer, styles.footerLogoContainer].join(' ')}>
              <LogoAlt className={[styles.logoImage, styles.footerLogo].join(' ')}/>

              <span className={styles.footerLogoText}>
                Blackprint
              </span>
              
              {(windowSize.width < 1025 && windowSize.width>768)&&
              <div style={{display:"flex"}} className={styles.footerStubContainer}>
                <span style={{padding:"0", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", color:'#959595', fontSize:"14px"}}>
                 © 2024
               </span>
                <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} />
                <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon}/>

              </div>
             }
            </span>
            {(windowSize.width > 1024)?
            <>
            <div className={styles.footerIconContainer}>
            <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.instagram.com/blackprint.design/")}/>
            <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.linkedin.com/company/blackprint-agency/")}/>
            </div>
          
            </>:
           
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
    )
}
