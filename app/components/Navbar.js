import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import { FaBars } from "react-icons/fa";
import Logo from '../../public/assets/logo.svg'

export default function Navbar({width}) {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.navbarContentContainer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logoImage}/>
        <p className={styles.navbarLogoText}>
          blackprint
        </p>
      </div>
      {(width>1024)?<>
        <p className={styles.navbarSubtext}>
          Recent Work
        </p>
        <p className={styles.navbarSubtext}>
          Pricing
        </p>
        <p className={styles.navbarSubtext}>
          Our Process
        </p>
        <p className={styles.navbarSubtext}>
          FAQs
        </p>
        <p className={styles.navbarSubtext}>
          Contact
        </p>
      </>:
      <span style={{padding:"0", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <FaBars size={20.5}/>
      </span>
  
      }
    </div>
  </div>
  )
}
