import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/page.module.scss";
import catalogStyles from "../../styles/catalog.module.scss";

export default function CatalogItem({title, category, description, perRow}) {
    return (
        <li className={(perRow === 2)?catalogStyles.catalogItemContainer:catalogStyles.catalogItemContainerAlt}>
            <div className={catalogStyles.catalogItemHeaderWrapper}>
                <p className={catalogStyles.catalogItemHeader}>
                    {title}
                </p>
            </div>
            <div className={(perRow === 2)?catalogStyles.catalogFigureWrapper:catalogStyles.catalogFigureWrapperAlt}>
                <span className={catalogStyles.catalogFigure}>

                </span>
            </div>
            <div className={catalogStyles.catalogItemDescription} style={{marginTop:(perRow===2)?"26px":"24px", gap: (perRow===2)?"":"12px"}}>
                <div className={catalogStyles.catalogItemCategories}>
                    <p className={catalogStyles.catalogItemHeader} style={{color:"#bbb", fontWeight:"500"}}>
                        {category}
                    </p>
                </div>
                <div className={catalogStyles.catalogSubtextWrapper}>
                    <p className={catalogStyles.catalogItemSubtext}>
                        {(perRow===2)?"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est justo, cursus nec efficitur fermentum, lacinia ut enim.. ":
                        description}
                    </p>
                </div>
            </div>
        </li>
    )
}