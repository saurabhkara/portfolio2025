import React from 'react'
import styles from "./experience.module.css"
export default function ExperienceCard() {
  return (
    <div className={styles.expericeCard}>
        <div className={styles.companyDetails}>
            <p className={styles.companyName}>UpWorks</p>
            <p className={styles.desination}>React Native Developer</p>
            <p className={styles.year}>2023-2025</p>
        </div>
        <div className={styles.companyRolesContainer}>
            <li className={styles.rolePoints}>Working as React Native Developer</li>
        </div>
    </div>
  )
}
