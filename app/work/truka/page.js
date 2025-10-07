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
                <NavbarV2 windowSize={windowSize} stick={true} bright={false}/>
            </div>
            <div
                className={workStyles.workPageHeaderWrapper}
                style={{position:"relative"}}
                data-speed="0.35"
                ref={headerRef}
                >
                <div className={workStyles.workPageHeaderContainer}>
                    <h1 className={workStyles.workHeaderText}>Truka</h1>
                </div>
                <div className={workStyles.parallaxLayer} ref={bgRef}>
                    <picture>
                    <source
                        media="(min-width: 769px)"
                        srcSet="/assets/trukacover-desktop.png 1x, /assets/trukacover-desktop.png 2x"
                    />
                    <img
                        className={workStyles.parallaxImg}
                        src="/assets/trukacover3.png"
                        alt="Truka cover"
                        loading="eager"
                        fetchpriority="high"
                    />
                    </picture>
                </div>
            </div>
            <div className={workStyles.workTagHeader}>
                <span className={workStyles.workTagButton}>
                    E-COMMERCE
                </span>
                <span className={workStyles.workTagButton}>
                    DIGITAL MEDIA
                </span>
                <span className={workStyles.workTagButton}>
                    AD CAMPAIGN
                </span>
            </div>
            <section className={workStyles.workInfoSection}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            OUR ROLE
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            Community platform design partner, Brand system architect, Marketing and growth advisor
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
                            August 2025
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"500"}}> 
                            OVERVIEW
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Blackprint partnered with Truka to transform an idea into a thriving community for young entrepreneurs and founders. A design system was developed that reflected their values, digital flows were established to support membership growth, and event strategies were guided to attract consistent attendance. The brand today operates as a trusted community hub that continues to expand.
                        </p>
                        <ContextItem subtext={"The scope covered identity creation, digital integration, and client advisory. Every step was designed with longevity in mind, ensuring the platform would feel both authentic and adaptable as it scaled."}
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
                            Creating a Trusted Brand
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The client needed an identity that would inspire confidence and bring people together.
                        </p>
                        <ContextItem subtext={"Entrepreneurs often drift between communities that lack staying power. Truka wanted a design that made members feel at home and motivated to invest their time."}
                        title={false}/>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Driving Consistent Participation
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The client needed an identity that would inspire confidence and bring people together.
                        </p>
                        <ContextItem subtext={"Without intentional themes and communication, events risked blending into the noise. Truka wanted strategies that made each gathering feel valuable."}
                        title={false}/>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Building a Growth Engine
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           The community required systems that could manage new members smoothly as the brand expanded.
                        </p>
                        <ContextItem subtext={" Manual processes would not last, so integrations were critical from day one."}
                        title={false}/>
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
                            Competitive Research
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Research into members only clubs and event spaces provided clarity on what inspired loyalty. Insights from this study informed design and positioning choices.
                        </p>

                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Design System for Growth
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                             A visual identity was built to align with young founders and their values, designed to stretch from small online sessions to large in person events.
                        </p>

                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Advisory Support
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           Ongoing direction was given on how to market events, refine positioning, and drive engagement.
                        </p>

                    </div>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Integrated Digital Journey
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Gohighlevel was used to connect sign ups, event registration, and follow ups into one seamless flow.
                        </p>
                        <ContextItem subtext={"This created confidence that every new lead was nurtured without gaps or manual delays."}
                        title={false}/>
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
                            Foundation for Long Term Identity
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The design system continues to define Truka’s look and feel.
                        </p>

                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Growing Community Participation
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Weekly meetups now attract more than 100 attendees and the community has expanded into in person events.
                        </p>
   
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Proven Engagement
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           The brand system has generated more than 100k interactions across the client’s page, providing credibility and excitement.
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
            <Footer windowSize={windowSize}/>
        </div>
            
    )
}