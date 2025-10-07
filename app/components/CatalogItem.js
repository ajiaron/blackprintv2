import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import catalogStyles from "../../styles/catalog.module.scss";
import Link from "next/link";

export default function CatalogItem({title, category, description, perRow, onPage, src}) {
    return (
        <li className={(perRow === 2)?catalogStyles.catalogItemContainer:catalogStyles.catalogItemContainerAlt}>
            {/*(!onPage)&&
            <div className={catalogStyles.catalogItemHeaderWrapper}>
                <p className={catalogStyles.catalogItemHeader}>
                    {title}
                </p>
            </div>
           */ }
            <div className={(perRow === 2)?catalogStyles.catalogFigureWrapper:catalogStyles.catalogFigureWrapperAlt}>
                <Link style={{width:"100%", height:"100%",display:"flex"}} href={`/work/${title.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}>
                    <span className={catalogStyles.catalogFigure}>
                        <img className={catalogStyles.catalogFigureImage}
                        style={{objectPosition:(title==="6lack Clover"&&(!onPage))?"50% 13.5%":""}}
                         src={src}
                         loading="eager" fetchpriority="high" alt="title">
                        </img>
                    </span>
                </Link>
            </div>
            <div className={catalogStyles.catalogItemDescription} style={{marginTop:(perRow===2)?"26px":"24px", gap: (perRow===2)?"":"12px"}}>
                <div className={catalogStyles.catalogItemCategories}>
                    <p className={catalogStyles.catalogItemHeader} style={{color:"#bbb", fontWeight:"500"}}>
                        {title}
                    </p>
                </div>
                <div className={catalogStyles.catalogSubtextWrapper}>
                    <p className={catalogStyles.catalogItemSubtext}>
                        {description}
                    </p>
                </div>
            </div>
        </li>
    )
}