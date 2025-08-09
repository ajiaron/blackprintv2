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
import TradesmarkSmall from "../../public/assets/tradesmarksmall.png"
import DwiwSmall from "../../public/assets/dwiwsmall.png"
import DwiwMedium from "../../public/assets/dwiwmedium.png"
import Blackprint from "../../public/assets/blackprint.png"

export default function Catalog({width}) {
  return (
    <div className={styles.catalogContentContainer}>
        <div style={{position:"relative"}}>
            <div className={styles.catalogCover}/>
        </div>
        {
        (width <=530)?
        <div className={styles.catalogContent}>
            <div className={styles.catalogColumn}>
                <Image src={Bvexterior} objectFit="cover" alt="bvexterior" className={[styles.catalogImage, styles.catalogImageLeft].join(' ')}/>
                <Image src={Mansion} objectFit="cover" alt="truka mansion" className={[styles.catalogImage, styles.catalogImageLeft].join(' ')}/>
                <div className={styles.catalogRow} >
                    {(width >= 428)&&
                    <Image src={TradesmarkSmall} objectFit="cover" alt="tradesmark" className={styles.catalogImageSmall}/>
                    }
                    <Image src={Truka} objectFit="cover" alt="truka" className={styles.catalogImageSmall} style={{marginLeft:(width < 428)?"auto":"", marginRight:(width < 428)?"":"auto"}}/>

                </div>
            </div>
            <div className={styles.catalogColumn}>
                <Image src={Poker} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
                <div className={styles.catalogRow}>
                    <Image src={Peakingduck} objectFit="cover" alt="peakingduck" className={styles.catalogImageSmall}/>
                    {(width >= 428)&&
                    <Image src={DwiwSmall} objectFit="cover" alt="dwiw" className={styles.catalogImageSmall}/>
                    }
                </div>
                <Image src={Blackprint} objectFit="cover" alt="blackprint" className={styles.catalogImage}/>

            </div>
        </div>:
        <div className={styles.catalogContent}>
            <div className={styles.catalogColumn}>
                <Image src={Bvexterior} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
                <Image src={Mansion} objectFit="cover" alt="truka mansion" className={styles.catalogImage}/>
                {(width<=768)&&
                    <Image src={Blackprint} objectFit="cover" alt="blackprint" className={styles.catalogImage}/>
                }
            </div>
            {(width >768)&&
            <div className={styles.catalogColumn} >
                <Image src={Dwiw} objectFit="cover" alt="dwiw" className={styles.catalogImageLarge}/>
            </div>
            }
            <div className={styles.catalogColumn}>
                <Image src={Poker} objectFit="cover" alt="bvexterior" className={styles.catalogImage}/>
                {(width>768)?
                (width > 1024)?
                <div className={styles.catalogRow}>
                    <Image src={Peakingduck} objectFit="cover" alt="peakingduck" className={styles.catalogImageSmall}/>
                    <Image src={Truka} objectFit="cover" alt="truka" className={styles.catalogImageSmall}/>
                </div>:
                    <Image src={Blackprint} objectFit="cover" alt="blackprint" className={styles.catalogImage}/>
                :
                <div className={styles.catalogColumn} >
                     <Image src={Dwiw} objectFit="cover" alt="dwiw" className={styles.catalogImageLarge}/>
                </div>
                
                }
            </div>
            {(width > 1024) &&
            <div className={styles.catalogColumn}>
                <Image src={Tradesmark} objectFit="cover" alt="tradesmark" className={styles.catalogImage}/>
                <Image src={Blackprint} objectFit="cover" alt="blackprint" className={styles.catalogImage}/>
            </div>
            }
        </div>
        }
    </div>
  )
}
