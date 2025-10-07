'use client';
import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import Link from "next/link";
import CatalogItem from "../components/CatalogItem";
import styles from "../../styles/page.module.scss";
import catalogStyles from "../../styles/catalog.module.scss";
import LogoAlt from '../../public/assets/logoalt.svg'
import Logo from '../../public/assets/logo.svg'
import Head from 'next/head';
import NavbarV2 from "../components/NavbarV2";
import Footer from "../components/Footer"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export default function Page() {
    const [animation, setAnimation] = useState(false)
    const [open, setOpen] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    function handleSocial(val) {
        window.location.href = val
    } 
    function handleScroll(val) {
        window.location.href = val
    } 
    const handleOpen = (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to handleClickOutside
        setOpen(!open);
    };
    const contentRef = useRef(null);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
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
    s}, []);
    useEffect(()=> {
        setAnimation(true)
    }, [])
    useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
    <div className={styles.main} ref={contentRef}>

        <div className={catalogStyles.catalogPageHeaderWrapper}>
            {
            <div className={catalogStyles.catalogPageHeader} style={{position:"relative"}}>
               {/* <div className={[`${catalogStyles.catalogBlob} ${animation ? catalogStyles.animate : ''}`]} id={'home'}></div>*/}
                <svg
                style={{
                    color: "#3CB371",
                    position: "absolute",
                    transform: "translateY(4.25rem)"
                }}
                viewBox="0 0 1440 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute w-full -top-px shrink-0 -z-10 fadeSlideDown"
                >
                <mask id="path-1-inside-1_414_5526" fill="white">
                    <path d="M0 0H1440V181H0V0Z"></path>
                </mask>
                <path
                    d="M0 0H1440V181H0V0Z"
                    fill="url(#paint0_linear_414_5526)"
                    fillOpacity="0.22"
                ></path>
                <path
                    d="M0 2H1440V-2H0V2Z"
                    fill="url(#paint1_linear_414_5526)"
                    mask="url(#path-1-inside-1_414_5526)"
                ></path>
                <defs>
                    <linearGradient
                    id="paint0_linear_414_5526"
                    x1="720"
                    y1="0"
                    x2="720"
                    y2="181"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="currentColor"></stop>
                    <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint1_linear_414_5526"
                    x1="0"
                    y1="90.5"
                    x2="1440"
                    y2="90.5"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="currentColor" stopOpacity="0"></stop>
                    <stop offset="0.395" stopColor="currentColor"></stop>
                    <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
                </svg>
            </div>
            }
            <NavbarV2 windowSize={windowSize} stick={false} bright={false}/>
            <div className={catalogStyles.catalogPageHeaderContainer}>
                <p className={catalogStyles.catalogHeaderText}>
                    Designs By Blackprint
                </p>
                <p className={catalogStyles.catalogHeaderSubtext}>
                    From websites to graphics, we make sure your project stands out from the rest.
                </p>
            </div>
        </div>
        <div className={catalogStyles.catalogPageContent}>
            <ul className={catalogStyles.catalogPageContentRow}>
                <CatalogItem title={"Truka"} category={"Product Title Header"} description={"WEBSITE / STRATEGY"} perRow={3} onPage={true} src={"/assets/trukacover.png"}/>
                <CatalogItem title={"Brightview Exterior"} category={"Product Title Header"} description={"DESIGN REVAMP / LEAD FLOWS"} perRow={3} onPage={true} src={"/assets/bvepreview.png"}/>
                <CatalogItem title={"Peaking Duck"} category={"Product Title Header"} description={"FLYERS / DIGITAL MEDIA"} perRow={3} onPage={true} src={"/assets/pdgpreview.png"}/>
               
            </ul>
            <ul className={catalogStyles.catalogPageContentRow}>
                <CatalogItem title={"TradesMark"} category={"Product Title Header"} description={"WEBSITE / FOUNDATIONS"} perRow={3} onPage={true} src={"/assets/tradesmarkpreview.png"}/>
                <CatalogItem title={"6lack Clover"} category={"Product Title Header"} description={"PACKAGING / E-COMMERCE"} perRow={3} onPage={true} src={"/assets/blackcloverpreview.png"}/>
                <CatalogItem title={"Creatorverse"} category={"Product Title Header"} description={"STRATEGY / CAMPAIGNING"} perRow={3} onPage={true} src={"/assets/creatorversepreview.png"}/>
            </ul>
        </div>
        <Footer windowSize={windowSize}/>
    </div>
    )
}
