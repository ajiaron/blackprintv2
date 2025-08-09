import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import catalogStyles from "../../styles/catalog.module.scss";
import CatalogItem from "./CatalogItem";
import Link from "next/link";
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
        <div className={catalogStyles.catalogFigureContainer}>
            <ul className={catalogStyles.catalogFigureRow}>
                <CatalogItem title={"Product Work 1"} category={"WEBSITE / FUNNEL PAGE"} description={""} perRow={2}/>
                <CatalogItem title={"Product Work 2"} category={"MARKETING / STRATEGY"} description={""} perRow={2}/>
            </ul>
            <ul className={catalogStyles.catalogFigureRow}>
                <CatalogItem title={"Product Work 3"} category={"WEBSITE / E-COMMERCE PLATFORM"} description={""} perRow={2}/>
                <CatalogItem title={"Product Work 4"} category={"PRODUCT DESIGN / PACKEGING"} description={""} perRow={2}/>
            </ul>
        </div>
        <Link className={catalogStyles.catalogFigureFooter} href={"/work"}>
            <span className={catalogStyles.catalogButton}>
                See all work
            {
            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:".625rem"}}>
              <path d="M16.7466 5.44194C16.9907 5.19786 16.9907 4.80214 16.7466 4.55806L12.7692 0.580583C12.5251 0.336505 12.1293 0.336505 11.8853 0.580583C11.6412 0.82466 11.6412 1.22039 11.8853 1.46447L15.4208 5L11.8853 8.53553C11.6412 8.77961 11.6412 9.17534 11.8853 9.41942C12.1293 9.6635 12.5251 9.6635 12.7692 9.41942L16.7466 5.44194ZM0.5 5.625H16.3047V4.375H0.5V5.625Z" 
              fill="#fff"/>
              <defs>

              </defs>
            </svg>
            }
            </span>
        </Link>
    </div>
  )
}
