import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import { FaBars } from "react-icons/fa";
import Logo from '../../public/assets/logo.svg'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'


export default function Navbar({width, contentRef}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  //const contentRef = useRef(null);

  function handleOpen() {
    setOpen(!open)
    console.log('ok')
  }
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
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      console.log("disabling scroll")

      disableScroll();
    } else {
      console.log("enabling scroll")
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
    <div className={styles.navbarContainer}>
    <div className={styles.navbarContentContainer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logoImage}/>
        <p className={styles.navbarLogoText}>
          blackprint
        </p>
      </div>
      {(width<=1024)?
      <span style={{padding:"0", display:"flex", alignItems:"center", justifyContent:"center", transform:"translateY(1px)"}}
      onClick={() => handleOpen()}>
        <FaBars size={20}/>
      </span>:
      <>
        <p className={[styles.navbarSubtext, styles.navbarSubtextLarge].join(' ')}>
          Recent Work
        </p>
        <p className={[styles.navbarSubtext, styles.navbarSubtextLarge].join(' ')}>
          Pricing
        </p>
        <p className={[styles.navbarSubtext, styles.navbarSubtextLarge].join(' ')}>
          Our Process
        </p>
        <p className={[styles.navbarSubtext, styles.navbarSubtextLarge].join(' ')}>
          FAQs
        </p>
        <p className={[styles.navbarSubtext, styles.navbarSubtextLarge].join(' ')}>
          Contact
        </p>
      </>
      }
    </div>
      {/* Animated Menu */}
      <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className={styles.menuContainer}
          style={{ originX: 1, originY: 0, borderRadius:"1rem" }}
        >
          <motion.div variants={itemVariants} className={styles.menuItem}>
            Recent Work
          </motion.div>
          <motion.div variants={itemVariants} className={styles.menuItem}>
            Pricing
          </motion.div>
          <motion.div variants={itemVariants} className={styles.menuItem}>
            Our Process
          </motion.div>
          <motion.div variants={itemVariants} className={styles.menuItem}>
            FAQs
          </motion.div>
          <motion.div variants={itemVariants} className={styles.menuItem}>
            Contact
          </motion.div>
          <motion.span variants={itemVariants} className={styles.menuStartButton}>
            <p className={styles.buttonTextSmall}>
              Get Started
            </p>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  )
}
