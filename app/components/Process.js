import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Process({state}) {
  return (
    <div className={styles.processFigureContainer}>
        <div className={styles.processFigureWrapper}>
            <div className={styles.processTabContainer}>
                <div className={styles.processFigureTab}>
                    <p className={styles.processFigureText}>
                        {(state==="consultation")?"Book An Appointment":(state==="design")?"Low-Fidelity Wireframe":"Layout & Assets"}
                    </p>
                </div>
            </div>
            {
            <svg width="199" height="85" viewBox="0 0 201 87" fill="none" xmlns="http://www.w3.org/2000/svg" className={[styles.processLineTop, styles.path].join(' ')}>
            <path d="M1 1V31.208C1 40.0446 8.16344 47.2081 17 47.2081H184C192.837 47.2081 200 54.3715 200 63.2081V86" stroke={state==="design"?"#3CB371":state==="consultation"?"#3399ff":"#B970C5"} stroke-width="2.25" stroke-linecap="round" stroke-dasharray="8 8" style={{transition:"stroke .15s linear"}}/>
            </svg>
            }
            <div className={styles.processTabContainer}>
                <div className={styles.processFigureTabAlt} style={{backgroundColor:(state==="design")?'var(--theme-color)':state==="consultation"?"#3399FF":"#B970c5", borderColor:(state==="design")?'var(--theme-color)':state==="consultation"?"#3399FF":"#B970c5"}}>
                    <p className={styles.processFigureText} style={{fontWeight:"550"}}>
                        {(state==="consultation")?"Screening Process":(state==="design")?"Assets & Branding":"Responsive Breakpoints"}
                    </p>
                </div>
            </div>
            {
                <svg width="170" height="73" viewBox="0 0 172 75" fill="none" xmlns="http://www.w3.org/2000/svg" className={[styles.processLine, styles.path].join(' ')}>
                <path d="M171 1V22.9797C171 31.8163 163.837 38.9797 155 38.9797H17C8.16344 38.9797 1 46.1432 1 54.9797V74" stroke={state==="design"?"#3CB371":state==="consultation"?"#3399ff":"#B970C5"}  stroke-width="2.25" stroke-linecap="round" stroke-dasharray="8 8" style={{transition:"stroke .15s linear"}}/>
                </svg>
            }
            <div className={styles.processTabContainer}>
                <div className={styles.processFigureTab}>
                    <p className={styles.processFigureText}>
                        {(state==="consultation")?"Specifications Outline":(state==="design")?"Copywriting & Revisions":"External Integrations"}
                    </p>
                </div>
            </div>
            {
                <svg width="154" height="74" viewBox="0 0 156 76" fill="none" xmlns="http://www.w3.org/2000/svg" className={[styles.processLineBottom, styles.path].join(' ')}>
                <path d="M1 1V29.5C1 38.3366 8.16344 45.5 17 45.5H139C147.837 45.5 155 52.6634 155 61.5V75" stroke={state==="design"?"#3CB371":state==="consultation"?"#3399ff":"#B970C5"}  stroke-width="2.25" stroke-linecap="round" stroke-dasharray="8 8" style={{transition:"stroke .15s linear"}}/>
                </svg>
            }
            <div className={styles.processTabContainer}>
                <div className={styles.processFigureTabAltV2} style={{backgroundColor:(state==="design")?'var(--theme-color)':state==="consultation"?"#3399FF":"#B970c5", borderColor:(state==="design")?'var(--theme-color)':state==="consultation"?"#3399FF":"#B970c5"}}>
                    <p className={styles.processFigureText} style={{fontWeight:"550"}}>
                        {(state==="consultation")?"Design":(state==="design")?"Development":"Deployment"}
                    </p>
                    <FaArrowRightLong size={20} style={{paddingTop:"1.25px", transform:"translateX(6px) scaleY(1.0)"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
