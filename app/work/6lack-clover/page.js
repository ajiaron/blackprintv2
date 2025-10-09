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
    useParallax(headerRef, bgRef, 0.7)         
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
                    <motion.h1 className={workStyles.workHeaderText}
                        initial={{opacity:0, y:32}}
                        animate={{opacity:1, y:0}}
                        transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 35,
                        delay: .3
                        }}>
                        6lack Clover
                    </motion.h1>   
                </div>
                <div className={workStyles.parallaxLayer} ref={bgRef}>
                    <picture>
                    <source
                        media="(min-width: 769px)"
                        srcSet="/assets/blackcloverpreview2.png 1x, /assets/blackcloverpreview2.png 2x"
                    />
                    <img
                        className={workStyles.parallaxImg}
                        src="/assets/blackcloverpreview2.png"
                        alt="pdg cover"
                        loading="eager"
                        fetchpriority="high"
                        style={{objectFit:"cover"}}
                    />
                    </picture>
                </div>
            </div>
            <motion.div className={workStyles.workTagHeader}
            initial={{opacity:0, y:16}}
                        animate={{opacity:1, y:0}}
                        transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 35,
                        delay: .45
                        }}>
                <span className={workStyles.workTagButton}>
                    MARKETING STRATEGY
                </span>
                <span className={workStyles.workTagButton}>
                    PRODUCT DESIGN
                </span>
                <span className={workStyles.workTagButton}>
                    E-COMMERCE
                </span>
            </motion.div>
            <motion.section className={workStyles.workInfoSection}
             initial={{opacity:0, y:16}}
                        animate={{opacity:1, y:0}}
                        transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 35,
                        delay: .6
                        }}>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            OUR ROLE
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            Disruptive brand architect. Packaging designer. E-commerce strategist. Marketing partner.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            DELIVERABLES
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            E-Commerce Website, Product Packaging, Marketing Groundwork
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"600"}}> 
                            DATE
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff"}}> 
                            MARCH 2025
                        </p>
                    </div>
                </div>
                <div className={workStyles.workInfoContainer}>
                    <div className={workStyles.workInfoTextWrapper}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#aaa", fontWeight:"500"}}> 
                            OVERVIEW
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Blackprint partnered with 6lack Clover to create a consumer packaged goods brand that broke away from generic competitors. A grunge inspired design system, production ready packaging, and a flexible e-commerce solution were all developed to prepare the brand for launch.
                        </p>
                        <ContextItem subtext={"The project combined design, quality control, and marketing preparation. By drawing inspiration from categories outside of CPG, 6lack Clover entered the market with a brand that felt entirely new."}
                        title={true}/>
                    </div>
                </div>
            </motion.section>
            <motion.section className={[workStyles.workInfoSection, workStyles.workMetricsSection].join(' ')} style={{flexDirection:"column"}}
             initial={{opacity:0, y:16}}
                        animate={{opacity:1, y:0}}
                        transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 35,
                        delay: .6
                        }}>
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
            </motion.section>
            <motion.section className={workStyles.workInfoSection}
             initial={{opacity:0, y:16}}
                        animate={{opacity:1, y:0}}
                        transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 35,
                        delay: .6
                        }}>
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
                            Disrupting a Crowded Space
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The client wanted an identity that would not resemble other CPG brands in their category.
                        </p>
        
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Developing a Complete Identity
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Logo, design kit, and packaging were needed to create a cohesive brand foundation.
                        </p>
        
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Expanding Beyond Shopify
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           They required an e-commerce system that maintained creative freedom while offering strong backend stability.
                        </p>
      
                    </div>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Building Early Buzz
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           A marketing plan was necessary to generate traction before launch.
                        </p>
                 
                    </div>
                </div>
            </motion.section>
             <motion.section className={workStyles.workInfoSection}
              initial={{opacity:0, y:16}}
                        animate={{opacity:1, y:0}}
                        transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 35,
                        delay: .6
                        }}>
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
                            Cross Industry Inspirtation
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Research was conducted into more than 50 brands in areas like apparel and wellness to inform a disruptive direction.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Grunge Inspired System
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            An alternative, countercultural aesthetic was developed to break free from polished but predictable industry designs.
                        </p>

                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            3D Packeging Design
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Photorealistic packaging was rendered with Figma, Pacdora, and Blender to ensure production readiness.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            E-commerce Integration
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                           Framer, Framer Commerce, and Shopify were combined to balance design flexibility with backend reliability.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Product Quality Testing
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Physical products were reviewed and tested to ensure packaging matched expectations.
                        </p>
                    </div>
                    <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Marketing Groundwork
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            A list of UGC creators was curated and outreach strategies were defined to drive traction.
                        </p>
                    </div>
                </div>
            </motion.section>
             <motion.section className={workStyles.workInfoSection} style={{ borderBottom: "none"}}
              initial={{opacity:0, y:16}}
                        animate={{opacity:1, y:0}}
                        transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 35,
                        delay: .6
                        }}>
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
                            Complete Launch Package
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            The client debuted with branding, packaging, and e-commerce systems ready to go.
                        </p>

                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Pre-order Traction
                        </p>
                         <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            Buzz from the disruptive brand identity created organic attention and word of mouth growth.
                        </p>
                    </div>
                     <div className={workStyles.workInfoTextWrapper} style={{gap:".375rem"}}>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"400"}}> 
                            Foundation for Expansion
                        </p>
                        <p className={catalogStyles.catalogItemSubtext} style={{color:"#fff", fontWeight:"300"}}> 
                            6lack Clover is now positioned with both the look and infrastructure to scale as a CPG brand.
                        </p>
                    </div>
                </div>
            </motion.section>
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