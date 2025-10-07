'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import catalogStyles from "../../styles/catalog.module.scss";
import LogoAlt from '../../public/assets/logoalt.svg'
import Logo from '../../public/assets/logo.svg'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export default function Footer({windowSize}) {
    function handleSocial(val) {
        window.location.href = val
    } 
    return (
        <section className={styles.footerSectionAlt} id={"footer"}>
          <div className={styles.footerNavigationContainer}>
            <span className={[styles.logoContainer, styles.footerLogoContainer].join(' ')}>
                <LogoAlt className={[styles.logoImage, styles.footerLogo].join(' ')}/>
                <span className={styles.footerLogoText}>
                    Blackprint
                </span>
                {(windowSize.width < 1025 && windowSize.width>768)&&
                <div style={{display:"flex"}} className={styles.footerStubContainer}>
                    <span style={{padding:"0", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", color:'#959595', fontSize:"14px"}}>
                        © 2024
                </span>
                    <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} />
                    <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon}/>
                </div>
                }
            </span>
            {(windowSize.width > 1024)?
            <>
                <div className={styles.footerIconContainer}>
                    <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.instagram.com/blackprint.design/")}/>
                    <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.linkedin.com/company/blackprint-agency/")}/>
                </div>
            
            </>:
            <div style={{display:"flex"}} className={styles.footerStubContainer}>
              {(windowSize.width > 480)&&
                <span style={{padding:"0", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", color:'#959595', fontSize:"14px"}}>
                © 2024
                </span>
              }
                <FaInstagram color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.instagram.com/blackprint.design/")}/>
                <FaLinkedin color={"#959595"} size={22} className={styles.footerIcon} onClick={()=>handleSocial("https://www.linkedin.com/company/blackprint-agency/")}/>
            </div>
            }
          </div>
      </section>
    )
}