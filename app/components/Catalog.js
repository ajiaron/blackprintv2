import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import { FaBars } from "react-icons/fa";
import Logo from '../../public/assets/logo.svg'
import Bvexterior from "../../public/assets/bvexterior.png"
import Mansion from "../../public/assets/mansion.png"
import Dwiw from "../../public/assets/dwiw.png"
import Poker from "../../public/assets/trukamansion.png"
import Peakingduck from "../../public/assets/peakingduck.png"
import Truka from "../../public/assets/truka.png"
import Tradesmark from "../../public/assets/tradesmark.png"
import Blackprint from "../../public/assets/blackprint.png"

export default function Catalog({width}) {
  return (
    <div className={styles.catalogContentContainer}>
        <div style={{position:"relative"}}>
            <div className={styles.catalogCover}/>
        </div>
        {
        (width <=768)?
        <div className={styles.catalogContent}>
            <div className={styles.catalogColumn}>
                <Image src={Bvexterior} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
                <Image src={Mansion} objectFit="cover" alt="truka mansion" className={styles.catalogImage}/>
                <div className={styles.catalogRow} >
                <Image src={Truka} objectFit="cover" alt="truka" className={styles.catalogImageSmall} style={{marginLeft:"auto"}}/>
                </div>
            </div>
            <div className={styles.catalogColumn}>
                <Image src={Poker} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
                <div className={styles.catalogRow}>
                <Image src={Peakingduck} objectFit="cover" alt="peakingduck" className={styles.catalogImageSmall}/>
                </div>
                <Image src={Blackprint} objectFit="cover" alt="blackprint" className={styles.catalogImage}/>

            </div>

        </div>:
        <div className={styles.catalogContent}>
            <div className={styles.catalogColumn}>
                <Image src={Bvexterior} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
                <Image src={Mansion} objectFit="cover" alt="truka mansion" className={styles.catalogImage}/>
            </div>
            <div className={styles.catalogColumn} >
                <Image src={Dwiw} objectFit="cover" alt="dwiw" className={styles.catalogImageLarge}/>
            </div>
            <div className={styles.catalogColumn}>
                <Image src={Poker} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
                <div className={styles.catalogRow}>
                <Image src={Peakingduck} objectFit="cover" alt="peakingduck" className={styles.catalogImageSmall}/>
                <Image src={Truka} objectFit="cover" alt="truka" className={styles.catalogImageSmall}/>
                </div>
            </div>
            <div className={styles.catalogColumn}>
                <Image src={Tradesmark} objectFit="cover" alt="tradesmark" className={styles.catalogImage}/>
                <Image src={Blackprint} objectFit="cover" alt="blackprint" className={styles.catalogImage}/>
            </div>
        </div>
        }
    </div>
  )
}
