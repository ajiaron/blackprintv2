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
                <NavbarV2 windowSize={windowSize} stick={true} bright={false} />
            </div>
            <div
                className={workStyles.workPageHeaderWrapper}
                style={{position:"relative"}}
                data-speed="0.35"
                ref={headerRef}
                >
                <div className={workStyles.workPageHeaderContainer}>
                    <h1 className={workStyles.workHeaderText}>Peaking Duck Group</h1>
                </div>
                <div className={workStyles.parallaxLayer} ref={bgRef}>
                    <picture>
                    <source
                        media="(min-width: 769px)"
                        srcSet="/assets/pdgcover.png 1x, /assets/pdgcover.png 2x"
                    />
                    <img
                        className={workStyles.parallaxImg}
                        src="/assets/pdgcover.png"
                        alt="pdg cover"
                        loading="eager"
                        fetchpriority="high"
                    />
                    </picture>
                </div>
            </div>
            <div className={workStyles.workTagHeader}>
                <span className={workStyles.workTagButton}>
                    EVENT BRANDING
                </span>
                <span className={workStyles.workTagButton}>
                    GRAPHIC DESIGN
                </span>
                <span className={workStyles.workTagButton}>
                    MEDIA ASSETS
                </span>
            </div>
            <section className={workStyles.workInfoSection}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            OUR ROLE
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            Nightlife brand curator. Flyer designer. Media and event strategist.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            DELIVERABLES
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            Flyers, Media Assets, Identity Expansion
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            DATE
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            January 2024
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"500"}}> 
                            OVERVIEW
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           Blackprint helped Peaking Duck stand out in the nightlife industry with an underground inspired design system. Flyers, media assets, and event branding were refined to perfection, creating an identity that expanded into multiple cities.
                        </p>
                        <ContextItem subtext={"The brand became more than a promotion company. Peaking Duck developed into a cultural identity that turned nights out into full experiences."}
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
                            Breaking Through in Nightlife
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The client wanted a design that stood out from generic club promotions.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Crafting a Cultural Identity
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            They sought a system that would give their brand staying power across different cities.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Perfecting Promotional Materials
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           Flyers and visuals needed to capture the mood of each event while keeping consistency.
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
                            Playful Word Identity
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The brand was built on a creative play with its name, Peaking Duck, blending humor with edge.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Underground Design System
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            A gritty, alternative visual system was created to differentiate from polished but predictable competitors.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Flyer Craftsmanship
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           Flyers were designed as core branding pieces, each one reflecting the mood of the event.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Media Refinement
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           All media assets were edited and reviewed until they matched the identity precisely.
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
                            Expansion Into New Markets
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           The brand grew into five cities across two states.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Large Scale Attendance
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Over 150,000 lifetime attendees have experienced Peaking Duck events.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Consistent Recognition
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           The design system continues to define ads and branding across platforms.
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