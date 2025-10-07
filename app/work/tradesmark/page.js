'use client'
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import Link from "next/link";
import styles from "../../../styles/page.module.scss";
import NavbarV2 from "@/app/components/NavbarV2";
import catalogStyles from "../../../styles/catalog.module.scss"
import workStyles from "../../../styles/work.module.scss"
import useParallax from "@/app/hooks/useParallax";
import Footer from "@/app/components/Footer";

const ContextItem = ({subtext, title}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <span className={workStyles.expandContainer} style={{gap:(title)?".75rem":".375rem"}} onClick={()=>setIsActive(!isActive)}>
        <p className={[catalogStyles.catalogItemSubtext, workStyles.highlightText].join(' ')} style={{fontWeight:"300"}}> 
            {(!isActive)?"More  >":"Less  <"}
        </p>
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
            <div style={{paddingBottom:"0"}}>
                <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"300"}}>
                  {subtext}
                </p>
            </div>
        </motion.div>
        }
    </span>
  )
}
export default function Work() {
    const [animation, setAnimation] = useState(false)
    const [open, setOpen] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    function handleSocial(val) {
        window.location.href = val
    } 
    function handleScroll(val) {
        window.location.href = val
    } 
    const handleOpen = (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to handleClickOutside
        setOpen(!open);
    };
    const contentRef = useRef(null);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const menuVariants = {
        closed: {
            scale: 0,
            transition: {
                delay: 0.15,
            },
        },
        open: {
            scale: 1,
            transition: {
                type: "spring",
                duration: 0.6,
                delayChildren: 0.2,
                staggerChildren: 0.05,
            },
        },
    };
    const itemVariants = {
        closed: { x: -16, opacity: 0 },
        open: { x: 0, opacity: 1 },
        transition: { opacity: { duration: 0.2 } },
    };
    function navigateBooking() {
        window.location.href = `https://calendly.com/blackprint-unlimited/30min`
    }
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    s}, []);
    useEffect(()=> {
        setAnimation(true)
    }, [])
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

    const headerRef = useRef(null)              // wrapper section
    const bgRef = useRef(null)                  // background layer
    useParallax(headerRef, bgRef, 0.75)         
    return (
        <div className={styles.main} ref={contentRef}>
            <div style={{width:"100%",justifyContent:"center", display:"flex", height:"5rem", position:"absolute"}}>
                <NavbarV2 windowSize={windowSize} stick={true} bright={true} />
            </div>
            <div
                className={workStyles.workPageHeaderWrapper}
                style={{position:"relative"}}
                data-speed="0.35"
                ref={headerRef}
                >
                <div className={workStyles.workPageHeaderContainer}>
                    <h1 className={workStyles.workHeaderText} style={{color:"#000"}}>TradesMark Marketing</h1>
                </div>
                <div className={workStyles.parallaxLayer} ref={bgRef}>
                    <picture>
                    <source
                        media="(min-width: 769px)"
                        srcSet="/assets/tradesmarkcover2.png 1x, /assets/tradesmarkcover2.png 2x"
                    />
                    <img
                        className={workStyles.parallaxImg}
                        src="/assets/tradesmarkcover2.png"
                        alt="tradesmark cover"
                        loading="eager"
                        fetchpriority="high"
                    />
                    </picture>
                </div>
            </div>
            <div className={workStyles.workTagHeader}>
                <span className={workStyles.workTagButton} style={{whiteSpace:"nowrap"}}>
                    FUNNEL PAGE
                </span>
                <span className={workStyles.workTagButton} style={{whiteSpace:"nowrap"}}>
                    ONBOARDING FLOW
                </span>
                <span className={workStyles.workTagButton}>
                    LEAD GENERATION
                </span>
            </div>
            <section className={workStyles.workInfoSection}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            OUR ROLE
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            Business marketing system builder. Digital foundation architect. Campaign and client delivery partner.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            DELIVERABLES
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            E-Commerce Website, Funnel Page, Social Media Campaigning
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            DATE
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            July 2024
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"500"}}> 
                            OVERVIEW
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           Blackprint worked with TradesMark to build a complete marketing engine for trade professionals. From onboarding flows to campaign execution, every element was designed to be practical, reliable, and capable of producing early results.
                        </p>
                        <ContextItem subtext={"The challenge was creating a system that could serve both the TradesMark brand itself and its trade professional clients. Our approach combined technical setup, brand design, and process automation into one clear framework."}
                        title={true}/>
                    </div>
                </div>
            </section>
            <section className={[workStyles.workInfoSection, workStyles.workMetricsSection].join(' ')} style={{flexDirection:"column"}}>
                <div className={workStyles.workMetricsHeader}>
                    <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600", fontSize:"20px"}}>
                        METRICS
                    </p>
                </div>
                <div className={workStyles.workMetricsWrapper}>
                    <div className={workStyles.workMetricsItem}>
                        <h1 className={workStyles.workMetricText}>
                            45+
                        </h1>
                        <div className={workStyles.workInfoTextWrapper} style={{gap:".625rem"}}>
                            <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                                Creating a Trusted Brand
                            </p>
                            <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                                The client needed an identity that would inspire confidence and bring people together.
                            </p>
                            <ContextItem subtext={"Without intentional themes and communication, events risked blending into the noise. Truka wanted strategies that made each gathering feel valuable."}
                            title={false}/>
                        </div>
                    </div>
                    <div className={workStyles.workMetricsItem}>
                        <h1 className={workStyles.workMetricText}>
                            45+
                        </h1>
                        <div className={workStyles.workInfoTextWrapper} style={{gap:".625rem"}}>
                            <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                                Driving Consistent Participation
                            </p>
                            <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                                They sought support in shaping events that encouraged repeat attendance.
                            </p>
                            <ContextItem subtext={"Without intentional themes and communication, events risked blending into the noise. Truka wanted strategies that made each gathering feel valuable."}
                            title={false}/>
                        </div>
                    </div>
                    <div className={workStyles.workMetricsItem}>
                        <h1 className={workStyles.workMetricText}>
                            45+
                        </h1>
                        <div className={workStyles.workInfoTextWrapper} style={{gap:".625rem"}}>
                            <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                                Building a Growth Engine
                            </p>
                            <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                                The community required systems that could manage new members smoothly as the brand expanded.
                            </p>
                            <ContextItem subtext={"Without intentional themes and communication, events risked blending into the noise. Truka wanted strategies that made each gathering feel valuable."}
                            title={false}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={workStyles.workInfoSection}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            CLIENT REQUEST
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Engagiong Trade Professionals
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The brand needed a way to connect with an audience that is often skeptical of marketing.
                        </p>
                        <ContextItem subtext={"Trade professionals value straightforward communication and clear outcomes. TradesMark needed a brand voice and system that felt trustworthy."}
                        title={false}/>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                           Designing a Complete Operating System
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           The client required more than a website. They wanted an integrated structure that handled communication, lead tracking, and client delivery.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Creating Tools for Clients
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            TradesMark also needed websites and campaigns they could pass down to their own customers.
                        </p>
                    </div>
                </div>
            </section>
             <section className={workStyles.workInfoSection}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                           OUR APPROACH
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                           Onboarding System
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            A Notion based onboarding flow was built to make setup simple for new users.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            End to End Customer Journey
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Every step from awareness to conversion was mapped out and supported with digital tools to keep the process consistent.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Campaign and Website Development
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           Websites and Mailchimp campaigns were created with messaging tailored to the working style of trades professionals.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            AI Integration
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Artificial intelligence tools were introduced to handle repetitive outreach and personalize communication at scale
                        </p>
                    </div>
                </div>
            </section>
             <section className={workStyles.workInfoSection} style={{ borderBottom: "none"}}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            OUR IMPACT
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Early Client Acquisition
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Three new contracts were closed in the first month of launch.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Streamlined Lead Flow
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Prospects were guided from sign up to conversion with less friction and more clarity.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Marketing Backbone for Scale
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           TradesMark now operates with a system designed specifically for the needs of trade professionals.
                        </p>
                    </div>
                </div>
            </section>
            {/*
            <section className={workStyles.workInfoSection} style={{ borderBottom: "none"}}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            GALLERY
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoGallery}>

                    </div>
                </div>
            </section>
            */}
            <Footer windowSize={windowSize} />
        </div>
    )
}