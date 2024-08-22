import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import { FaBars } from "react-icons/fa";
import Logo from '../../public/assets/logo.svg'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'


export default function NavButton({width, contentRef, scrollToId, expand}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null)
  //const contentRef = useRef(null);

  function handleScroll(id) {
    setOpen(false)
    scrollToId(id)
  }
  const handleOpen = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to handleClickOutside
    setOpen(!open);
  };
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
  }, []);
  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => enableScroll(); // Clean up function to re-enable scroll on unmount
  }, [open]);

  const disableScroll = () => {
    if (contentRef.current) {
      document.body.style.overflowY = 'hidden';
    } else {
      console.log("problem")
    }
  };

  const enableScroll = () => {
    if (contentRef.current) {
      document.body.style.overflowY = 'auto';
    }else {
      console.log("problem")
    }
  };

  return (
    <motion.div className={styles.navButtonContainer}
    initial={{scale:0}}
    animate={{scale:(expand)?1:0}}
    exit={{scale:0,
    }}
    transition={{
        type: "spring",
        duration: 0.3,
        delay:.15
    }}>

        <span style={{padding:"0", display:"flex", alignItems:"center", justifyContent:"center", transform:"translateY(0px)"}}
        onClick={(e) => handleOpen(e)} ref={buttonRef}>
          <FaBars size={20} color={"#000"}/>
        </span>
      {/* Animated Menu */}
      <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className={styles.menuContainerAlt}
          style={{ originX: 1, originY: 1, borderRadius:"1rem" }}
        >
          <motion.span variants={itemVariants} className={styles.menuItem}
          onClick={()=>handleScroll("catalog")}>
            Recent Work
          </motion.span>
          <motion.span variants={itemVariants} className={styles.menuItem}
          onClick={()=>handleScroll("pricing")}>
            Pricing
          </motion.span>
          <motion.span variants={itemVariants} className={styles.menuItem}
          onClick={()=>handleScroll("process")}>
            Our Process
          </motion.span>
          <motion.span variants={itemVariants} className={styles.menuItem}
          onClick={()=>handleScroll("faqs")}>
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
  </motion.div>
  )
}
