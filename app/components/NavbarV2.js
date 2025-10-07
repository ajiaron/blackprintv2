'use client';
import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import Link from "next/link";
import styles from "../../styles/page.module.scss";
import catalogStyles from "../../styles/catalog.module.scss";
import Logo from '../../public/assets/logo.svg'
import { FaBars } from "react-icons/fa";

export default function NavbarV2({windowSize, stick, bright}) {
    const [animation, setAnimation] = useState(false)
    const [open, setOpen] = useState(false)
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
    return (
         <div className={catalogStyles.navbarContentContainer} style={{height:"4.25rem", paddingTop:".25rem",marginTop:"0", position:(stick)?"relative":"",
                 zIndex:1}}>
                <Link className={styles.logoContainer} href={"/"}>
                    <Logo className={styles.logoImage} style={{filter:(bright)?"invert(.9)":""}}/>
                    <p className={styles.navbarLogoText} style={{color:(bright)?"#000":"#fff", paddingTop:".125rem", fontWeight:(bright)?"600":""}}>
                        Blackprint 
                    </p>
                </Link>
                <div className={catalogStyles.navbarContentLinks}>
                    <Link href={"/work"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:(bright)?"#000":"#fff"}}>
                            Recent Work
                        </p>
                    </Link>
                     <Link href={"/#pricing"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:(bright)?"#000":"#fff"}}>
                            Pricing
                        </p>
                    </Link>
                    <Link href={"/#process"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:(bright)?"#000":"#fff"}}>
                            Our Process
                        </p>
                    </Link>
                    <Link href={"/#faqs"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:(bright)?"#000":"#fff"}}>
                            FAQs
                        </p>
                    </Link>
                    <Link href={"mailto:info@blackprint.in"}>
                        <p className={catalogStyles.navbarContentSmall} style={{color:(bright)?"#000":"#fff"}}>
                            Contact
                        </p>
                    </Link>
                </div>
                {(windowSize.width<=1200)?
                <div style={{position:"relative"}}>
                    <span style={{padding:"0", display:"flex", alignItems:"center", justifyContent:"center", transform:"translateY(1px)"}}
                    onClick={(e) => handleOpen(e)} ref={buttonRef}>
                        <FaBars size={20} color={(bright)?'#000':""}/>
                    </span>
                    <AnimatePresence>
                    {open && (
                        <motion.div
                        ref={menuRef}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className={styles.menuContainer}
                        style={{ right:"0%", top:"2.75rem", zIndex:1, originX: 1, originY: 0, borderRadius:"1rem" }}
                        >
                            <motion.span variants={itemVariants} className={styles.menuItem}
                            onClick={()=>handleScroll("/#catalog")}>
                                Recent Work
                            </motion.span>
                            <motion.span variants={itemVariants} className={styles.menuItem}
                            onClick={()=>handleScroll("/#pricing")}>
                                Pricing
                            </motion.span>
                            <motion.span variants={itemVariants} className={styles.menuItem}
                            onClick={()=>handleScroll("/#process")}>
                                Our Process
                            </motion.span>
                            <motion.span variants={itemVariants} className={styles.menuItem}
                            onClick={()=>handleScroll("/#faqs")}>
                                FAQs
                            </motion.span>
                            <motion.a variants={itemVariants} className={styles.menuItem}
                            href={"mailto:info@blackprint.in"}>
                                Contact
                            </motion.a>
                            <motion.span variants={itemVariants} className={styles.menuStartButton}
                            onClick={()=>navigateBooking()}>
                                <p className={styles.buttonTextSmall} onClick={()=>handleScroll("footer")}>
                                Get Started
                                </p>
                            </motion.span>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                :
                <div className={styles.logoContainer} style={{opacity:"0"}}>
                    <Logo className={styles.logoImage}/>
                    <p className={styles.navbarLogoText} style={{color:"#fff", paddingTop:".125rem"}}>
                        Blackprint
                    </p>
                </div>}
            </div>
    )
}