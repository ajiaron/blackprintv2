import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import Logo from '../../public/assets/logo.svg'

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.navbarContentContainer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logoImage}/>
        <p className={styles.navbarLogoText}>
          blackprint
        </p>
      </div>
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
    </div>
  </div>
  )
}
