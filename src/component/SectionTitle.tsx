import React from 'react';
import styles from "../app/page.module.css"
type IProp={
    title:string,
    aboutContainer?:string
}

export default function SectionTitle({ title,aboutContainer}: IProp) {
    return (
        <div>
            <div className={styles.sectionTitleContainer}>
                <p className={styles.abtSkl}>{title}</p>
            </div>
            <p className={styles.skillTech}>{aboutContainer}</p>
        </div>
    )
}
