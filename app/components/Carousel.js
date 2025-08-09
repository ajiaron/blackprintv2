import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import { FaBars } from "react-icons/fa";
import Logo from '../../public/assets/logo.svg'
export default function Carousel({width}) {
  return (
    <div className={styles.carouselContentContainer}>
        {(width <= 768)?
        <>
        <div className={styles.carouselRow}>
            <span className={styles.circleocIcon}/>
            <span className={styles.nebulaIcon}/>
            <span className={styles.dashbillIcon}/>
            <span className={styles.ksigIcon}/>
        </div>
        <div className={styles.carouselRowAlt}>
            <span className={styles.peakingduckIcon}/>
            <span className={styles.legacyIcon}/>
            <span className={styles.trukaIcon}/>
        </div>
        </>
        :
        <>
        <span className={styles.circleocIcon}/>
        <span className={styles.nebulaIcon}/>
        <span className={styles.dashbillIcon}/>
        <span className={styles.ksigIcon}/>
        <span className={styles.peakingduckIcon}/>
        <span className={styles.legacyIcon}/>
        <span className={styles.trukaIcon}/>
        </>
        }
    </div>
  )
}
